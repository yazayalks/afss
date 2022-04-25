using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class SettingsController : Controller
    {
        
        [HttpGet]
        
        public async Task<IActionResult> Settings()
        {
            return View();
        }
    }
}
