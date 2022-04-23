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
        private readonly AfssContext afssContext;

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        public ThresholdsController(AfssContext afssContext, ApplicationContext applicationContext, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.applicationContext = applicationContext;
            this.afssContext = afssContext;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> ThresholdsAsync()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
            var userRoles = await _userManager.GetRolesAsync(user);
            var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;

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
        [Authorize(Roles = "admin")]
        [ValidateAntiForgeryToken]
        public IActionResult Thresholds(ThresholdsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;
                var piKey = afssContext.PiUser.Single(u => u.CpuSerial == userPiKey);

                afssContext.PiThresholds.Add(new PiThresholds()
                {
                    MinTmpStove = Int32.Parse(model.MinTmpStove),
                    MaxTmpStove = Int32.Parse(model.MaxTmpStove),
                    CriticalTmpStove = Int32.Parse(model.CriticalTmpStove),
                    MinTmpTank = Int32.Parse(model.MinTmpTank),
                    MaxTmpTank = Int32.Parse(model.MaxTmpTank),
                    CriticalTmpTank = Int32.Parse(model.CriticalTmpTank),
                    MinTmpRoom = Int32.Parse(model.MinTmpRoom),
                    MaxTmpRoom = Int32.Parse(model.MaxTmpRoom),
                    CriticalTmpRoom = Int32.Parse(model.CriticalTmpRoom),
                    MinWaterLevel = Int32.Parse(model.MinWaterLevel),
                    MaxWaterLevel = Int32.Parse(model.MaxWaterLevel),
                    VolumeWaterLevel = Int32.Parse(model.VolumeWaterLevel),
                    MinGasLevel = Int32.Parse(model.MinGasLevel),
                    MaxGasLevel = Int32.Parse(model.MaxGasLevel),
                    CriticalGasLevel = Int32.Parse(model.CriticalGasLevel),
                    MinPressureTank = Int32.Parse(model.MinPressureTank),
                    MaxPressureTank = Int32.Parse(model.MaxPressureTank),
                    CriticalPressureTank = Int32.Parse(model.CriticalPressureTank),
                    Date = DateTime.UtcNow,
                    PiKey = piKey,

                });
                afssContext.SaveChanges();

                return View("Thresholds");
            }

            return View(model);
        }

        
    }
}
