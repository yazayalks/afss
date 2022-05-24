using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class MainInfoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
