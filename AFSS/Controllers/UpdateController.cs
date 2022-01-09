using AFSS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpdateController : ControllerBase
    {
        [HttpGet]
        public List<PiTask> Get(DateTime date, bool gas)
        {
            var result = new List<PiTask>();
            result.Add(new PiTask(PiTaskType.SERVO, date.ToString()));
            return result;
        }
    }
}
