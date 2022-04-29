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

        /*public EmailViewModel model2;
        public NameViewModel model3;*/
        [HttpGet]
        public IActionResult DataUser(DataUserViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = applicationContext.Users.SingleOrDefault(u => u.Id == userId.ToString());
            ViewBag.Name = user.UserName;
            ViewBag.Phone= user.PhoneNumber;
            ViewBag.Email = user.Email;

            /*EmailViewModel emailViewModel = new EmailViewModel();
            if (typeAction == "EditName")
            {
                return View(model);
                *//*return View(new DataUserViewModel {Name = model3.Name });*//*
            }
            if (typeAction == "EditEmail")
            {
                
                if (TempData["NewEmailViewModel"] is string s)
                {
                    emailViewModel = JsonConvert.DeserializeObject<EmailViewModel>(s);
                    // use newUser object now as needed
                    return View(new DataUserViewModel { Email = emailViewModel.Email });
                }
                
            }*/
            return View(model);
        }
        [HttpPost("nameModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditName(NameViewModel model)
        {
            
            /* List<IdentityError> errors = new List<IdentityError>();
             errors.Add(new IdentityError
             {
                 Description = "Неправильное содержимое ключа"
             });*/

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
            /*model3 = model;*/
            /*return RedirectToAction("DataUser", new { typeAction = "EditName"});*/
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
            /* var s = Newtonsoft.Json.JsonConvert.SerializeObject(model);
             TempData["NewEmailViewModel"] = s;*/

            /*if (ModelState.IsValid)
            {
                return View("DataUser");
            }*/
            /*model2 = model; */
            /*return View(new EmailViewModel { Email = model.Email });*/
            /* var entity = JsonConvert.DeserializeObject(model);


                 var result = new EmailViewModel { MyEntity = entity, MessageId = 1 };
                 return RedirectToAction(MVC.MyController.ResultsPage(result));


             var result = new ResultsViewModel { MyEntity = entity, MessageId = 2 };

             TempData["Result"] = result;*/

            /*return RedirectToAction("DataUser", new { typeAction = "EditEmail" });*/
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
            /* List<IdentityError> errors = new List<IdentityError>();
             errors.Add(new IdentityError
             {
                 Description = "Неправильное содержимое ключа"
             });*/

            /* if (ModelState.IsValid)
             {
                 return View("DataUser");
             }*/
            /*model3 = model;*/
            /*return RedirectToAction("DataUser", new { typeAction = "EditName"});*/
            return View("DataUser");
        }
        [HttpPost("passwordModel")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditPassword(PasswordViewModel model)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            User user = await _userManager.FindByIdAsync(userId);

            if (ModelState.IsValid)
            {
                var _passwordValidator = HttpContext.RequestServices.GetService(typeof(IPasswordValidator<User>)) as IPasswordValidator<User>;
                var _passwordHasher = HttpContext.RequestServices.GetService(typeof(IPasswordHasher<User>)) as IPasswordHasher<User>;

                PasswordVerificationResult passresult = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, model.PasswordOld);
                IdentityResult result = await _passwordValidator.ValidateAsync(_userManager, user, model.PasswordConfirm);
                if (passresult.ToString() != "Success")
                {
                    ModelState.AddModelError(string.Empty, "Пароль не тот");
                    ViewBag.Email = user.Email;
                    ViewBag.Name = user.UserName;
                    ViewBag.Phone = user.PhoneNumber;
                    return View("DataUser");
                }
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
