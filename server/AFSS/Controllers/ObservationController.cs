using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class ObservationController : Controller
    {
        public IActionResult Observation()
        {
            return View();
        }
    }
}
