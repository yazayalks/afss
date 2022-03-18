using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class StatisticsController : Controller
    {
        private readonly ApplicationContext applicationContext;
        public StatisticsController(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;

        }

        /*[Authorize]*/
        [AllowAnonymous]
        public IActionResult Statistics()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if ((userId == null) && (!Request.Cookies.ContainsKey("PiKey")))
            {
                return RedirectToAction("Login", "Account");
            }

            /*var userPiKey = applicationContext.Users.SingleOrDefault(u=> u.Id == userId).PiKey;*/
            /*ViewBag["UserKeyValue"] = "000000002690f5d0";*/
            return View();
        }
    }
}
