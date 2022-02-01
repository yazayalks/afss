using AFSS.DbContexts;
using AFSS.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetDataController : Controller
    {
        private readonly AfssDbContext afssDbContext;
        public GetDataController(AfssDbContext afssDbContext)
        {
            this.afssDbContext = afssDbContext;
        }
        [HttpGet]
        public List<PiData> Index(string key, int count = 20)
        {
            var user = afssDbContext.PiUsers.SingleOrDefault(u => u.CpuSerial == key);
            if (user != null)
            {
                return afssDbContext.PiData.Where(a => a.PiUserId == user.Id).OrderByDescending(a=>a.Date).Take(count).Select(ToPiData).ToList();
                 
            }
            else
            {
                return null;
            }
        }

        private PiData ToPiData(PiDatum piDatum)
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
                Water = piDatum.Water
            };
        }
    }
}
