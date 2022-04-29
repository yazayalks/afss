using AFSS.Models;
using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    /*[Route("[controller]")]*/
    public class MenuInputController : Controller
    {
        public IActionResult MenuInput()
        {
            return PartialView("MenuInput");
        }
    }
}
