using AFSS.Models;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpdateController : ControllerBase
    {
        private readonly AfssContext afssContext;
        public UpdateController(AfssContext afssDbContext)
        {
            this.afssContext = afssDbContext;
        }
        [HttpGet]
        public List<PiTaskDTO> Get(DateTime date, int gasRoom, double temperatureStove, double temperatureTank, double temperatureRoom, double pressureTank, int waterLevelTank, int servoStove, int servoPipe, string key, string criticalData, string mod)
        {
            var user = afssContext.PiUser.SingleOrDefault(u => u.CpuSerial == key);
            if (user == null)
            {
                user = new PiUser() { CpuSerial = key };
                afssContext.PiUser.Add(user);
                afssContext.SaveChanges();
            }
             string[] str = Array.Empty<string>();
            if (criticalData != null) { 
                 str = criticalData.Replace("[", "").Replace("]", "").Replace("\'", "").Split(',');
                }



            afssContext.PiData.Add(new PiData()
            {
                Gas = gasRoom,
                Pressure = pressureTank,
                Water = waterLevelTank,
                Date = DateTime.UtcNow,
                PiUser = user,
                Tmp0 = temperatureTank,
                Tmp1 = temperatureStove,
                Tmp2 = temperatureRoom,
                Servo0 = servoStove,
                Servo1 = servoPipe,
                CriticalData = string.Join(",", str),
                Mod = mod
                
            });
            var activeTasks = afssContext.PiTask.Where(u => u.Complete == false).ToList();
            activeTasks.ForEach(u => u.Complete = true);

            afssContext.SaveChanges();


            var tasksServoStove = activeTasks.Where(u => u.ServoType == 0).OrderByDescending(u => u.CreateDate).Take(1).ToList();
            var tasksServoPipe = activeTasks.Where(u => u.ServoType == 1).OrderByDescending(u => u.CreateDate).Take(1).ToList();

            var sendTasks = new List<PiTask>();

            sendTasks.AddRange(tasksServoStove);
            sendTasks.AddRange(tasksServoPipe);

            var result = sendTasks.Select(u => new PiTaskDTO()
            {
                servoType = u.ServoType,
                servoValue = u.ServoValue,
                mod = u.Mod,
            }
            ).ToList();

            return result;
        }

    }
}
