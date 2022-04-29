using AFSS.Models;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace AFSS.ViewModels
{

    public class CustomRegisrationValidator : IUserValidator<User>
    {
        private readonly ApplicationContext applicationContext;
        private readonly AfssContext afssDbContext;
        public CustomRegisrationValidator(ApplicationContext applicationContext, AfssContext afssDbContext)
        {
            this.afssDbContext = afssDbContext;
            this.applicationContext = applicationContext;
        }

        public Task<IdentityResult> ValidateAsync(UserManager<User> manager, User user)
        {
            List<IdentityError> errors = new List<IdentityError>();

            if (applicationContext.Users.Any(u => u.Email == user.Email))
            {
                errors.Add(new IdentityError
                {
                    Description = "Данный логин используется"
                });
            }
            /*var a = afssDbContext.PiUsers.Select(u => u.CpuSerial).ToList();
            var b = user.PiKey;*/
            var piKey = user.PiKey.ToLower();
            var hasNumChar = new Regex(@"^[a-z0-9]+$");
            var hasMinChars = new Regex(@".{16,16}");
            if (!hasNumChar.IsMatch(piKey))
            {
                errors.Add(new IdentityError
                {
                    Description = "Неправильное содержимое ключа"
                });
            }
            else { 
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
                    if (applicationContext.Users.Any(u => u.PiKey == piKey && u.EmailConfirmed == true))
                    {
                        errors.Add(new IdentityError
                        {
                            Description = "Данный ключ используется"
                        });
                    }
                }
            }

            return Task.FromResult(errors.Count == 0 ?
                IdentityResult.Success : IdentityResult.Failed(errors.ToArray()));
        }
    }
}
