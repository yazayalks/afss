using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class InformationsController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Informations()
        {
            return View();
        }
    }
}
