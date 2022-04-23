using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class UpdateKeyController : Controller
    {

        private readonly AfssContext afssDbContext;
        private readonly ApplicationContext applicationContext;
        public UpdateKeyController(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public void Index(string PiKey)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId != null)
            {
                var user = applicationContext.Users.FirstOrDefault(u => u.Id == userId);
                //var piKey = afssDbContext.PiUser.Single(u => u.CpuSerial == piKey);
                user.PiKey = PiKey;
                applicationContext.SaveChanges();
            }
        }
    }
}
