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
        public List<PiTask> Get(DateTime date, int gasRoom, double temperatureStove, double temperatureTank, double temperatureRoom, double pressureTank, int waterLevelTank, int ServoStove, int ServoPipe, string key)
        {
            var user = afssContext.PiUser.SingleOrDefault(u => u.CpuSerial == key);
            if (user == null)
            {
                user = new PiUser() { CpuSerial = key };
                afssContext.PiUser.Add(user);
                afssContext.SaveChanges();
            }
            afssContext.PiData.Add(new PiData()
            {
                Gas = gasRoom,
                Pressure = pressureTank,
                Water = waterLevelTank,
                Date = date,
                PiUser = user,
                Tmp0 = temperatureTank,
                Tmp1 = temperatureStove,
                Tmp2 = temperatureRoom,
                Servo0 = ServoStove,
                Servo1 = ServoPipe

            });
            
            var result = afssContext.PiTask.Where(u => u.Complete == false).ToList();
            result.ForEach(u => u.Complete = true);

            afssContext.SaveChanges();

            return result;
        }

    }
}
