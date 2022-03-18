using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
   /* [Route("[controller]")]*/
    public class FooterController : Controller
    {
        public IActionResult Footer()
        {
            return PartialView("Footer");
        }
    }
}
