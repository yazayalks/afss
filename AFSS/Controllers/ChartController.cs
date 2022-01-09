using AFSS.Chart;
using Microsoft.AspNetCore.Mvc;
using System;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class ChartController : Controller
    {
        Random rdn = new Random();

        [HttpGet]
        public IActionResult RealTimeChart()
        {
            return View();
        }
        public JsonResult GetRealTimeData()
        {
            RealTimeData data = new RealTimeData
            {
                TimeStamp = DateTime.Now,
                DataValue = rdn.Next(0, 11)
            };
            return Json(data);
        }
    }
}
