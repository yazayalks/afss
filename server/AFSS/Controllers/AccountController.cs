using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using AFSS.Models;
using AFSS.ViewModels;
using System.Text.RegularExpressions;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace AFSS.Controllers
{
    public class AccountController : Controller
    {
        private readonly AfssContext afssDbContext;
        private readonly ApplicationContext applicationContext;

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<User> _signInManager;


        public AccountController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,
            SignInManager<User> signInManager, AfssContext afssDbContext, ApplicationContext applicationContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.Email, PiKey = model.PiKey };

                // добавляем пользователя
                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    // установка куки
                    Response.Cookies.Append("PiKey", model.PiKey);
                    await _signInManager.SignInAsync(user, false);

                    return RedirectToAction("Statistics", "Statistics");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = null)
        {
            return View(new LoginViewModel { ReturnUrl = returnUrl });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user != null)
                {
                    //sign in
                    var signInResult = await _signInManager.PasswordSignInAsync(user, model.Password, false, false);
                    if (signInResult.Succeeded)
                    {
                        Response.Cookies.Append("PiKey",
                            applicationContext.Users.SingleOrDefault(u => u.Email == model.Email).PiKey);
                        if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                        {
                            return Redirect(model.ReturnUrl);
                        }
                        else
                        {
                            return RedirectToAction("Statistics", "Statistics");
                        }
                    }
                    else
                    {
                        ModelState.AddModelError("", "Неправильный логин и (или) пароль");
                    }
                }
            }

            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return View("Error");
            }

            var userToken = await applicationContext.UserTokens.SingleOrDefaultAsync(u => u.UserId == userId && u.Value == code);
            if (userToken != null)
            {
                var user = await applicationContext.Users.SingleAsync(u => u.Id == userId);
                user.EmailConfirmed = true;

                applicationContext.UserTokens.Remove(userToken);
                
                await applicationContext.SaveChangesAsync();
                
                return RedirectToAction("Index", "Selection");
            }

            return View("Error");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            // удаляем аутентификационные куки
            if (Request.Cookies.ContainsKey("PiKey"))
            {
                Response.Cookies.Delete("PiKey");
            }

            if (Request.Cookies.ContainsKey("UserName"))
            {
                Response.Cookies.Delete("UserName");
            }

            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Selection");
        }


        [HttpGet]
        public IActionResult Observe()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Observe(ObserveViewModel model)
        {
            List<IdentityError> errors = new List<IdentityError>();
            if (ModelState.IsValid)
            {
                var piKey = model.PiKey.ToLower();
                var hasNumChar = new Regex(@"^[a-z0-9]+$");
                var hasMinChars = new Regex(@".{16,16}");
                if (!hasNumChar.IsMatch(piKey))
                {
                    errors.Add(new IdentityError
                    {
                        Description = "Неправильное содержимое ключа"
                    });
                }
                else
                {
                    if (!hasMinChars.IsMatch(piKey))
                    {
                        errors.Add(new IdentityError
                        {
                            Description = "Неправильная длинна ключа"
                        });
                    }
                    else
                    {
                        if (!afssDbContext.PiUser.Any(u => u.CpuSerial == piKey))
                        {
                            errors.Add(new IdentityError
                            {
                                Description = "Данный ключ не существует"
                            });
                        }
                    }
                }

                if (errors.Count == 0)
                {
                    Response.Cookies.Append("PiKey", model.PiKey);
                    Response.Cookies.Append("UserName", model.Name);


                    return RedirectToAction("Statistics", "Statistics");
                }
            }

            return View(model);
        }
    }
}