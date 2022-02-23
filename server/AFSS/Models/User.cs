using Microsoft.AspNetCore.Identity;

namespace AFSS.Models
{
    public class User : IdentityUser
    {
        public int PiKey { get; set; }
    }
}
