using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class FooterController : Controller
    {
        public IActionResult Footer()
        {
            return PartialView("Footer");
        }
    }
}
