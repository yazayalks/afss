using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class GetInfoUserController : Controller
    {

        private readonly AfssContext afssDbContext;
        private readonly ApplicationContext applicationContext;
        public GetInfoUserController(AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public UserDTO Index(string PiKey)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId != null)
            {
                var user = applicationContext.Users.FirstOrDefault(u => u.PiKey == PiKey);
                if (user == null) { return new UserDTO(); };
                    var result = new UserDTO()
                {
                    Name = user.UserName,
                    Phone = user.PhoneNumber,
                    Email = user.Email,
                    };
            
                return result;
            }
            else
            {
                return new UserDTO();

            }

        }
    }
}
