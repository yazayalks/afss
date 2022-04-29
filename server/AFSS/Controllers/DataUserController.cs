using AFSS.Models;
using AFSS.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Xml;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class DataUserController : Controller
    {
        private readonly ApplicationContext applicationContext;
        private readonly UserManager<User> _userManager;

        public DataUserController(ApplicationContext applicationContext, UserManager<User> _userManager)
        {
            this.applicationContext = applicationContext;
            this._userManager = _userManager;
        }

        [HttpGet]
        public IActionResult DataUser(DataUserViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
            ViewBag.Name = user.UserName;
            ViewBag.Phone= user.PhoneNumber;
            ViewBag.Email = user.Email;

            return View(model);
        }
        [HttpPost("nameModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditName(NameViewModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
                user.UserName = model.Name;
                user.NormalizedUserName = model.Name.ToUpper();
                applicationContext.SaveChanges();
                ViewBag.Email = user.Email;
                ViewBag.Name = user.UserName;
                ViewBag.Phone = user.PhoneNumber;

            }
            return View("DataUser");
        }
        [HttpPost("emailModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditEmail(EmailViewModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
                user.Email = model.Email;
                user.NormalizedEmail = model.Email.ToUpper();
                user.EmailConfirmed = false;
                applicationContext.SaveChanges();
                ViewBag.Email = user.Email;
                ViewBag.Name = user.UserName;
                ViewBag.Phone = user.PhoneNumber;

            }
                //TODO send message for email
            return View("DataUser");
        }

        [HttpPost("phoneModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditPhone(PhoneViewModel model)
        {
            if (ModelState.IsValid)
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
                user.PhoneNumber = model.Phone;
                applicationContext.SaveChanges();
                ViewBag.Email = user.Email;
                ViewBag.Name = user.UserName;
                ViewBag.Phone = user.PhoneNumber;

            }
            return View("DataUser");
        }
        [HttpPost("passwordModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditPassword(PasswordViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            User user = await _userManager.FindByIdAsync(userId);
            PasswordVerificationResult passresult = PasswordVerificationResult.Failed;
            var _passwordValidator = HttpContext.RequestServices.GetService(typeof(IPasswordValidator<User>)) as IPasswordValidator<User>;
            var _passwordHasher = HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;
            if (model.PasswordOld != null) { 
                passresult = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, model.PasswordOld);
            }
            if ((passresult != PasswordVerificationResult.Success) && (model.PasswordOld != null))
            {
                ModelState.AddModelError(string.Empty, "Неверный пароль.");
                ViewBag.Email = user.Email;
                ViewBag.Name = user.UserName;
                ViewBag.Phone = user.PhoneNumber;
                return View("DataUser");
            }

            if (ModelState.IsValid)
            {
                IdentityResult result = await _passwordValidator.ValidateAsync(_userManager, user, model.PasswordConfirm);
                if (result.Succeeded)
                {
                    user.PasswordHash = _passwordHasher.HashPassword(user, model.PasswordConfirm);
                    await _userManager.UpdateAsync(user);
                    applicationContext.SaveChanges();
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Чёт не так");
                }
            }

            ViewBag.Email = user.Email;
            ViewBag.Name = user.UserName;
            ViewBag.Phone = user.PhoneNumber;

            return View("DataUser");
        }

    }
}
