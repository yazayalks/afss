using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class AuthorizationController : Controller
    {
        public IActionResult Authorization()
        {
            return View();
        }
    }
}
