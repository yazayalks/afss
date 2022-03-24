using AFSS.Models;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace AFSS.ViewModels
{
    public class ObserveValidator : ValidationAttribute
    {

  
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var afssDbContext = (AfssContext)validationContext
                         .GetService(typeof(AfssContext));

            string piKey = (value as string).ToLower();
            
            /*            var hasNumChar = new Regex(@"^[a-z0-9]+$");
                        var hasMinChars = new Regex(@".{16,16}");*/
            if (!afssDbContext.PiUser.Any(u => u.CpuSerial == piKey))
            {
                return new ValidationResult("Данный ключ не существует");
            }
            return new ValidationResult(null);
        }
    }

}
