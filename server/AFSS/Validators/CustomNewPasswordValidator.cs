using AFSS.Models;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Text.RegularExpressions;


namespace AFSS.Validators
{
    public class CustomNewPasswordValidator : ValidationAttribute
    {
        private readonly UserManager<User> _userManager;

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {


            if (value == null)
            {
                return new ValidationResult("Пароль не указан.");
            }
            var type =validationContext.MemberName;
            
            var password = value.ToString();

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
                return new ValidationResult("Содержит пробелы");
            }
            if ((hasUpperCharKir.IsMatch(password)) || (hasLowerCharKir.IsMatch(password)))
            {
                return new ValidationResult("Содержит кириллицу");
            }
            if (!hasMiniMaxChars.IsMatch(password))
            {
                return new ValidationResult("Длинна от 6 до 30");
            }
            if (!hasLowerChar.IsMatch(password))
            {
                return new ValidationResult("Нет строчной буквы");
            }
            if (!hasUpperChar.IsMatch(password))
            {
                return new ValidationResult("Нет заглавной буквы");
            }
            if (!hasNumber.IsMatch(password))
            {
                return new ValidationResult("Нет цифры");
            }
            if (!hasSymbols.IsMatch(password))
            {
                return new ValidationResult("Нет спец символа");
            }

            return ValidationResult.Success;
        }
    }
}
