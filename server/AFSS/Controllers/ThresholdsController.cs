using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class ThresholdsController : Controller
    {
        private readonly ApplicationContext applicationContext;
        public ThresholdsController(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;

        }
        [Authorize]
        public IActionResult Thresholds()
        {
            return View();
        }
    }
}
