using AFSS.Models;
using AFSS.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class ThresholdsController : Controller
    {
        private readonly ApplicationContext applicationContext;

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public ThresholdsController(ApplicationContext applicationContext, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.applicationContext = applicationContext;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> ThresholdsAsync()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
            var userRoles = await _userManager.GetRolesAsync(user);

            foreach (var userRole in userRoles)
            {
                if (userRole == "admin")
                {
                    return View();
                }
            }
            return RedirectToAction("DataUser", "DataUser");
            
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Thresholds(ThresholdsViewModel model)
        {
            if (ModelState.IsValid)
            {
                return View("Thresholds");
            }

            return View(model);
        }

        
    }
}
