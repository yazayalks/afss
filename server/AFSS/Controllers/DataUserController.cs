using AFSS.Models;
using AFSS.ViewModels;
using EmailApp;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Owin.Security.DataProtection;
using Newtonsoft.Json;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Xml;
using Microsoft.EntityFrameworkCore;

namespace AFSS.Controllers
{
    [Route("[controller]")]
    public class DataUserController : Controller
    {
        private readonly ApplicationContext applicationContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public DataUserController(ApplicationContext applicationContext, UserManager<User> _userManager, SignInManager<User> signInManager)
        {
            this.applicationContext = applicationContext;
            this._userManager = _userManager;
            this._signInManager = signInManager;
        }

        [HttpGet]
        public IActionResult DataUser(DataUserViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
            ViewBag.Name = user.UserName;
            ViewBag.Phone= user.PhoneNumber;
            ViewBag.Email = user.Email;
            ViewBag.EmailConfirmed = user.EmailConfirmed.ToString().ToLower();

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
                ViewBag.EmailConfirmed = user.EmailConfirmed.ToString().ToLower();

            }
            return View("DataUser");
        }
        [HttpPost("emailModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditEmail(EmailViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId);
            if (ModelState.IsValid)
            {
                if (user.Email != model.Email) { 
                    user.Email = model.Email;
                    user.NormalizedEmail = model.Email.ToUpper();
                    user.EmailConfirmed = false;
                    applicationContext.SaveChanges();
                    ViewBag.EmailConfirmed = user.EmailConfirmed.ToString().ToLower();
                    ViewBag.Email = user.Email;
                    ViewBag.Name = user.UserName;
                    ViewBag.Phone = user.PhoneNumber;
                }
                if (user.Email == model.Email)
                {
                    ViewBag.Email = user.Email;
                    ViewBag.Name = user.UserName;
                    ViewBag.Phone = user.PhoneNumber;
                    ViewBag.EmailConfirmed = user.EmailConfirmed.ToString().ToLower();
                }
            }
            return View("DataUser");
        }

        [HttpGet]
        [Route(nameof(ConfirmEmail))]
        public async Task<IActionResult> ConfirmEmail()
        {
            //var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _userManager.GetUserAsync(User);
            
           // var emailConfirmationCode = await _userManager.GenerateEmailConfirmationTokenAsync(user);
           if (user.EmailConfirmed)
           {
                ViewBag.EmailConfirmed = "true";
                // TODO эмаил подтверждён
                return View("DataUser"); 
           }
               
           
           var emailConfirmationCode = Guid.NewGuid().ToString();
           await applicationContext.UserTokens.AddAsync(new IdentityUserToken<string>()
           {
                UserId = user.Id,
                Name = "email",
                Value = emailConfirmationCode,
                LoginProvider = "MrNimbusProvider"
           });

           await applicationContext.SaveChangesAsync();
           
           
            var callbackUrl = Url.Action(
               "ConfirmEmail",
               "Account",
               new { userId = user.Id, code = emailConfirmationCode },
               protocol: HttpContext.Request.Scheme);
              
              EmailService emailService = new EmailService();
              await emailService.SendEmailAsync(user.Email, "Confirm your account",
                  $"Подтвердите регистрацию, перейдя по ссылке: <a href='{callbackUrl}'>link</a>");
              
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
                ViewBag.EmailConfirmed = user.EmailConfirmed.ToString().ToLower();

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
