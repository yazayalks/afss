﻿using Microsoft.AspNetCore.Mvc;

namespace AFSS.Controllers
{
    public class MenuController : Controller
    {
        public IActionResult Menu()
        {
            return PartialView("Menu");
        }
    }
}
