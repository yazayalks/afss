using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    /*[Authorize]*/
    public class GetThresholdsController : Controller
    {
        private readonly ApplicationContext applicationContext;

        private readonly AfssContext afssDbContext;
        public GetThresholdsController(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        public IEnumerable<PiThresholds> Index(string count, string key)
        {

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            string userPiKey = string.Empty;
            if (userId != null)
            {
                userPiKey = applicationContext.Users.SingleOrDefault(u => u.Id == userId).PiKey;
            }
            else
            {
                    if (key != null)
                    {
                        userPiKey = key;
                    } else
                    {
                        return Enumerable.Empty<PiThresholds>();
                    }
            }



            var user = afssDbContext.PiUser.SingleOrDefault(u => u.CpuSerial == userPiKey.ToString());
            if (user != null)
            {
                var result = afssDbContext.PiThresholds.Where(a => a.PiKeyId == user.Id).OrderBy(a => a.Date).Take(1).Select(ToPiThresholds).ToList();
                if (result.Count() == 0) {

                    afssDbContext.PiThresholds.Add(new PiThresholds()
                    {
                        MinTmpStove = 0,
                        MaxTmpStove = 100,
                        CriticalTmpStove = 150,
                        MinTmpTank = 0,
                        MaxTmpTank = 80,
                        CriticalTmpTank = 100,
                        MinTmpRoom = 0,
                        MaxTmpRoom = 100,
                        CriticalTmpRoom = 120,
                        MinWaterLevel = 0,
                        MaxWaterLevel = 70,
                        VolumeWaterLevel = 100,
                        MinGasLevel = 0,
                        MaxGasLevel = 100,
                        CriticalGasLevel = 150,
                        MinPressureTank = 0,
                        MaxPressureTank = 100,
                        CriticalPressureTank = 120,
                        Date = DateTime.UtcNow,
                        PiKey = user,

                    });
                    afssDbContext.SaveChanges();
                }
                if (count == "last")
                {
                    return afssDbContext.PiThresholds.Where(a => a.PiKeyId == user.Id).OrderByDescending(a => a.Date).Take(1).Select(ToPiThresholds).ToList();
                }
                if (count == "first")
                {
                    return afssDbContext.PiThresholds.Where(a => a.PiKeyId == user.Id).OrderBy(a => a.Date).Take(1).Select(ToPiThresholds).ToList();
                }
                return Enumerable.Empty<PiThresholds>();
            }
            else
            {
                return Enumerable.Empty<PiThresholds>();
            }
        }

        private PiThresholds ToPiThresholds(PiThresholds PiThresholdsDB)
        {
            return new PiThresholds()
            {
                Date = PiThresholdsDB.Date,
                MinTmpStove = PiThresholdsDB.MinTmpStove,
                MaxTmpStove = PiThresholdsDB.MaxTmpStove,
                CriticalTmpStove = PiThresholdsDB.CriticalTmpStove,
                MinTmpTank = PiThresholdsDB.MinTmpTank,
                MaxTmpTank = PiThresholdsDB.MaxTmpTank,
                CriticalTmpTank = PiThresholdsDB.CriticalTmpTank,
                MinTmpRoom = PiThresholdsDB.MinTmpRoom,
                MaxTmpRoom = PiThresholdsDB.MaxTmpRoom,
                CriticalTmpRoom = PiThresholdsDB.CriticalTmpRoom,
                MinWaterLevel = PiThresholdsDB.MinWaterLevel,
                MaxWaterLevel = PiThresholdsDB.MaxWaterLevel,
                VolumeWaterLevel = PiThresholdsDB.VolumeWaterLevel,
                MinGasLevel = PiThresholdsDB.MinGasLevel,
                MaxGasLevel = PiThresholdsDB.MaxGasLevel,
                CriticalGasLevel = PiThresholdsDB.CriticalGasLevel,
                MinPressureTank = PiThresholdsDB.MinPressureTank,
                MaxPressureTank = PiThresholdsDB.MaxPressureTank,
                CriticalPressureTank = PiThresholdsDB.CriticalPressureTank,
            };
        }
    }
}
