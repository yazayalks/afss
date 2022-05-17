
using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    /*[Authorize]*/
    public class GetDataController : Controller
    {
        private readonly ApplicationContext applicationContext;

        private readonly AfssContext afssDbContext;
        public GetDataController(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        public IEnumerable<PiData> Index(int count = 20)
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
                    return Enumerable.Empty<PiData>();
                }
            }
           


            var user = afssDbContext.PiUser.SingleOrDefault(u => u.CpuSerial == userPiKey.ToString());
            if (user != null)
            {
                return afssDbContext.PiData.Where(a => a.PiUserId == user.Id).OrderByDescending(a => a.Date).Take(count).Select(ToPiData).ToList();

            }
            else
            {
                return Enumerable.Empty<PiData>();
            }
        }

        private PiData ToPiData(PiData piDatum)
        {
            return new PiData()
            {
                Date = piDatum.Date,
                Gas = piDatum.Gas,
                Pressure = piDatum.Pressure,
                Servo0 = piDatum.Servo0,
                Servo1 = piDatum.Servo1,
                Tmp0 = piDatum.Tmp0,
                Tmp1 = piDatum.Tmp1,
                Tmp2 = piDatum.Tmp2,
                Water = piDatum.Water,
                CriticalData = piDatum.CriticalData,
            };
        }
    }
}
