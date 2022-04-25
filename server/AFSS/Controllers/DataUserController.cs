using AFSS.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class DataUserController : Controller
    {
        public IActionResult DataUser()
        {
            return View("DataUser");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditName(EditNameViewModel model)
        {
            if (ModelState.IsValid)
            {
                return View("DataUser");
            }
            return View(model);
        }

        }
}
