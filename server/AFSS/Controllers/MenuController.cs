using AFSS.Models;
using AFSS.ViewModels;
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
            MenuViewModel model = new MenuViewModel()
            {
                Name = user.UserName,
                PiKey = user.PiKey,
            };

            return View();
        }
       /* public IActionResult GetItem()
        {
            
            return PartialView();
        }*/
    }
}
