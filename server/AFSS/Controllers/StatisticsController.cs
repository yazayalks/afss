using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class StatisticsController : Controller
    {
        public IActionResult Statistics()
        {
            /*ViewBag["UserKeyValue"] = "000000002690f5d0";*/
            return View();
        }
    }
}
