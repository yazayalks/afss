using AFSS.Validators;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class PhoneViewModel
    {
        [Required(ErrorMessage = "Номер не указан")]
        [Display(Name = "Логин")]
        [CustomPhoneValidator]
        public string Phone { get; set; }
    }
}
