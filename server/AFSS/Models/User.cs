using Microsoft.AspNetCore.Identity;

namespace AFSS.Models
{
    public class User : IdentityUser
    {
        public string PiKey { get; set; }
    }
}
