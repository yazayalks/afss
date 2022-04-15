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
        public IEnumerable<PiThresholds> Index(string count)
        {

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            string userPiKey = string.Empty;
            if (userId != null)
            {
                userPiKey = applicationContext.Users.SingleOrDefault(u => u.Id == userId).PiKey;
            }
            else
            {
                if (Request.Cookies.ContainsKey("PiKey"))
                {
                    userPiKey = Request.Cookies["PiKey"];
                }
                else
                {
                    return Enumerable.Empty<PiThresholds>();
                }
            }



            var user = afssDbContext.PiUser.SingleOrDefault(u => u.CpuSerial == userPiKey.ToString());
            if (user != null)
            {
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
            /*var thresholds = afssDbContext.PiThresholds.OrderByDescending(u => u.Date).Take(1).ToList();

            var sendThresholds = new List<PiThresholds>();*/
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
