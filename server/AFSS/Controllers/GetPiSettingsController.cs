using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetPiSettings : Controller
    {
        private readonly ApplicationContext applicationContext;
        private readonly AfssContext afssDbContext;
        public GetPiSettings(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }

        [HttpGet]
        public IEnumerable<PiSettings> Index(string key)
        {

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            string userPiKey = string.Empty;
            if (userId != null)
            {
                userPiKey = applicationContext.Users.SingleOrDefault(u => u.Id == userId).PiKey;
            }
            else
            {
                if (key != null)
                {
                    userPiKey = key;
                }
                else
                {
                    return Enumerable.Empty<PiSettings>();
                }
            }



            var user = afssDbContext.PiUser.SingleOrDefault(u => u.CpuSerial == userPiKey.ToString());
            if (user != null)
            {
                var result = afssDbContext.PiSettings.Where(a => a.PiKeyId == user.Id).OrderBy(a => a.Date).Take(1).Select(ToPiSettings).ToList();
                if (result.Count() == 0)
                {

                    afssDbContext.PiSettings.Add(new PiSettings()
                    {
                        Light = true,
                        Sounds = true,
                        Date = DateTime.UtcNow,
                        PiKey = user,

                    });
                    afssDbContext.SaveChanges();
                }

                    return afssDbContext.PiSettings.Where(a => a.PiKeyId == user.Id).OrderByDescending(a => a.Date).Take(1).Select(ToPiSettings).ToList();

            }
            else
            {
                return Enumerable.Empty<PiSettings>();
            }
        }

        private PiSettings ToPiSettings(PiSettings PiSettingsDB)
        {
            return new PiSettings()
            {
                Date = PiSettingsDB.Date,
                Light = PiSettingsDB.Light,
                Sounds = PiSettingsDB.Sounds,
            };
        }
    }
}
