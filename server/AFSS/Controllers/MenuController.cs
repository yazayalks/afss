using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
/*    [Route("[controller]")]*/
    public class MenuController : Controller
    {
        public IActionResult Menu()
        {
           /* ViewData["PiKey"] = "123";*/

            return PartialView("Menu");
        }

    }
}
