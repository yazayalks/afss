using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UpdatePiSettings : ControllerBase
    {
        private readonly AfssContext afssContext;
        private readonly ApplicationContext applicationContext;
        public UpdatePiSettings(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        public void Get(bool sound, bool light)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;

            var piKey = afssContext.PiUser.Single(u => u.CpuSerial == userPiKey);

            afssContext.PiSettings.Add(new PiSettings()
            {
                Light = light,
                Sounds =   sound,
                Date = DateTime.UtcNow,
                PiKey = piKey,
            });
            afssContext.SaveChanges();
        }

    }
}
