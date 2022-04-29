using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace AFSS.Validators
{
    public class CustomPhoneValidator : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return new ValidationResult("Имя не указано.");
            }


            var str = value.ToString();
            var hasMiniMaxChars = new Regex(@".{6,20}");
            var isNumberphone = new Regex(@"^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$");

            if (!hasMiniMaxChars.IsMatch(str))
            {
                return new ValidationResult("От 3 до 20 символов.");
            }
            if (!isNumberphone.IsMatch(str))
            {
                return new ValidationResult("Введите номер правильно.");
            }

            return ValidationResult.Success;
        }
    }
}
