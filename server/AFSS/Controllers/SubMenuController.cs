using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class SubMenuController : Controller
    {
        public IActionResult Menu()
        {
            return PartialView("SubMenu");
        }
    }
}
