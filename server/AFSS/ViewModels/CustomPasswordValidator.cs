using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AFSS.Models;
using Microsoft.AspNetCore.Identity;

namespace AFSS.Models
{
    public class CustomPasswordValidator : IPasswordValidator<User>
    {
        public int RequiredLength { get; set; } // минимальная длина

        public CustomPasswordValidator(int length)
        {
            RequiredLength = length;
        }

        public Task<IdentityResult> ValidateAsync(UserManager<User> manager, User user, string password)
        {
            List<IdentityError> errors = new List<IdentityError>();

           /* if (String.IsNullOrEmpty(password) || password.Length < RequiredLength)
            {
                errors.Add(new IdentityError
                {
                    Description = $"Минимальная длина пароля равна {RequiredLength}"
                });
            }*/
            /*string pattern = "^[0-9]+$";*/
            /*string pattern = "^(?=.*?[0 - 9])(?=.*?[a - z])(?=.*?[A - Z])(?=.*?[@#$%^&+-=!*])(?=\\S+$).{6,}$";*/

            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasLowerChar = new Regex(@"[a-z]+");
            var hasMiniMaxChars = new Regex(@".{6,30}");
            var hasSymbols = new Regex(@"[!@#$%^&*()_+=\[{\]};:<>|./?,~-]");
            var hasUpperCharKir = new Regex(@"[А-Я]+");
            var hasLowerCharKir = new Regex(@"[а-я]+");
            var hasSpace = new Regex(@"\s");

            if (hasSpace.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль не допускает наличие пробелов"
                });
            }
            if ((hasUpperCharKir.IsMatch(password)) || (hasLowerCharKir.IsMatch(password)))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль не допускает наличие символов кириллицы"
                });
            }
            if (!hasMiniMaxChars.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль должен иметь длинну от 6 до 30 символов"
                });
            }
            if (!hasLowerChar.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль должен содержать хотя бы одну строчную букву ('a' - 'z')"
                });
            }
            if (!hasUpperChar.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль должен содержать хотя бы одну заглавную букву ('A' - 'Z')"
                });
            }
            if (!hasNumber.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль должен содержать хотя бы одну цифру"
                });
            }
            if (!hasSymbols.IsMatch(password))
            {
                errors.Add(new IdentityError
                {
                    Description = "Пароль должен содержать хотя бы один специальный символ"
                });
            }

            return Task.FromResult(errors.Count == 0 ?
                IdentityResult.Success : IdentityResult.Failed(errors.ToArray()));
        }
    }
}