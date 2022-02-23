using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
   /* [Route("[controller]")]*/
    public class SelectionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
