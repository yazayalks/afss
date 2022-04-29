using AFSS.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    public class MenuController : Controller
    {
        private readonly ApplicationContext applicationContext;

        public MenuController(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }
        
        [HttpGet]
        public IActionResult Menu()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
          /*  ViewBag.Name2 = user.UserName;
            ViewBag.PiKey2 = user.PiKey;*/

            return PartialView("Menu");
        }
    }
}
