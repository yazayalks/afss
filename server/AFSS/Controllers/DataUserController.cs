using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class DataUserController : Controller
    {
        public IActionResult DataUser()
        {
            return View("DataUser");
        }
    }
}
