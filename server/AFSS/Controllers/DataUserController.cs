using AFSS.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class DataUserController : Controller
    {
        public IActionResult DataUser()
        {
            return View("DataUser");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditName(DataUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                return View("DataUser");
            }
            return View(model.Name);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditEmail(EmailViewModel model)
        {
            if (ModelState.IsValid)
            {
                return View("DataUser");
            }
            return View(model.Email);
        }

    }
}
