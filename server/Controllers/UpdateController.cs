using AFSS.DbContexts;
using AFSS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpdateController : ControllerBase
    {
        private readonly AfssDbContext afssDbContext;
        public UpdateController(AfssDbContext afssDbContext)
        {
            this.afssDbContext = afssDbContext;
        }
        [HttpGet]
        //public List<PiTask> Get(DateTime date, int gas, double tmp0, double pressure, int water, string key)
        public List<PiTask> Get(DateTime date, int gasRoom, double temperatureStove, double temperatureTank, double temperatureRoom, double pressureTank, int waterLevelTank, int ServoStove, int ServoPipe, string key)
        {
            var user = afssDbContext.PiUsers.SingleOrDefault(u => u.CpuSerial == key);
            if (user == null)
            {
                user = new PiUser() { CpuSerial = key };
                afssDbContext.PiUsers.Add(user);
                afssDbContext.SaveChanges();
            }
            afssDbContext.PiData.Add(new PiDatum()
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
            afssDbContext.SaveChanges();
            var result = new List<PiTask>();
            result.Add(new PiTask(PiTaskType.SERVO, date.ToString()));
            return result;
        }
        
    }
}
