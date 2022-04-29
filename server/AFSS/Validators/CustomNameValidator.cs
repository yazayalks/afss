
using AFSS.Models;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace AFSS.Validators
{
    public class CustomNameValidator : ValidationAttribute
    {

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return new ValidationResult("Имя не указано.");
            }

                
            var str = value.ToString();
            var hasMiniMaxChars = new Regex(@".{6,20}");

            if (!hasMiniMaxChars.IsMatch(str))
            {
                return new ValidationResult("От 3 до 20 символов.");
            }

            return ValidationResult.Success;
        }
    }
}
