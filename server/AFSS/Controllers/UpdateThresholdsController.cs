using AFSS.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpdateThresholds : ControllerBase
    {
        private readonly AfssContext afssContext;
        private readonly ApplicationContext applicationContext;
        public UpdateThresholds(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        public List<PiThresholds> Get(DateTime date, int minTmpStove, int maxTmpStove, int criticalTmpStove, int minTmpTank, int maxTmpTank,
            int criticalTmpTank, int minTmpRoom, int maxTmpRoom, int criticalTmpRoom, int minWaterLevel, int maxWaterLevel,
            int volumeWaterLevel, int minGasLevel, int maxGasLevel, int criticalGasLevel, int minPressureTank, int maxPressureTank, int criticalPressureTank, string key)
        {
            /*var user = afssContext.PiUser.SingleOrDefault(u => u.CpuSerial == key);*/

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;

            var piKey = afssContext.PiUser.Single(u => u.CpuSerial == userPiKey);

            /* if (user == null)
             {
                 user = new PiUser() { CpuSerial = key };
                 afssContext.PiUser.Add(user);
                 afssContext.SaveChanges();
             }*/

            /*var a = user;*/
            afssContext.PiThresholds.Add(new PiThresholds()
            {
                MinTmpStove = minTmpStove,
                MaxTmpStove = maxTmpStove,
                CriticalTmpStove = criticalTmpStove,
                MinTmpTank = minTmpTank,
                MaxTmpTank = maxTmpTank,
                CriticalTmpTank = criticalTmpTank,
                MinTmpRoom = minTmpRoom,
                MaxTmpRoom = maxTmpRoom,
                CriticalTmpRoom = criticalTmpRoom,
                MinWaterLevel = minWaterLevel,
                MaxWaterLevel = maxWaterLevel,
                VolumeWaterLevel = volumeWaterLevel,
                MinGasLevel = minGasLevel,
                MaxGasLevel = maxGasLevel,
                CriticalGasLevel = criticalGasLevel,
                MinPressureTank = minPressureTank,
                MaxPressureTank = maxPressureTank,
                CriticalPressureTank = criticalPressureTank,
                Date = DateTime.UtcNow,
                PiKey = piKey,

            });
            afssContext.SaveChanges();

            return new List<PiThresholds>();
        }

    }
}
