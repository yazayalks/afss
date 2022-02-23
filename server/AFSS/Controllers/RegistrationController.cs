using Microsoft.AspNetCore.Mvc;


namespace AFSS.Controllers
{
    
    [Route("[controller]")]
    public class RegistrationController : Controller
    {
        public IActionResult Registration()
        {
            return View();
        }
    }
}
