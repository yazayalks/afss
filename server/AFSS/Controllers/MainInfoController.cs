using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class MainInfoController : Controller
    {
        public IActionResult MainInfo()
        {
            return View();
        }
    }
}
