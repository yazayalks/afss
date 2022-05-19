using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    [Authorize]
    public class SettingsController : Controller
    {
        
        [HttpGet]
        
        public async Task<IActionResult> Settings()
        {
            return View();
        }
    }
}
