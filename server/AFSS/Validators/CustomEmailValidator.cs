using AFSS.Models;
using System.ComponentModel.DataAnnotations;

namespace AFSS.Validators
{
    public class CustomEmailValidator : ValidationAttribute
    {

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var a = value;
            var b = validationContext;
            /*var a = validationContext.;*/
            /*var afssDbContext = (AfssContext)validationContext
                         .GetService(typeof(AfssContext));

            string piKey = (value as string).ToLower();

            *//*            var hasNumChar = new Regex(@"^[a-z0-9]+$");
                        var hasMinChars = new Regex(@".{16,16}");*/
            /*if (!afssDbContext.PiUser.Any(u => u.CpuSerial == piKey))
            {*/
            if (value == null)
            {
                return new ValidationResult("Введи почту");
            }

            /*}
            */
            return ValidationResult.Success;
        }
    }
}
