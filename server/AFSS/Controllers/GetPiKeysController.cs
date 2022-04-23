using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class GetPiKeysController : Controller
    {

        private readonly AfssContext afssDbContext;
        private readonly ApplicationContext applicationContext;
        public GetPiKeysController(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;   
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public IEnumerable<PiKey> Index()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;
            if (userId != null)
            {
                var PiKeys = afssDbContext.PiUser.Where(u => u.CpuSerial != null).ToList();
                var result = PiKeys.Select(u => new PiKey()
                {
                    piKey = u.CpuSerial,
                }
            ).ToList();
                return result;
            }
            else
            {
                    return Enumerable.Empty<PiKey>();
            }

        }
    }
}
