using AFSS.Validators;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class PasswordViewModel
    {
        [Required(ErrorMessage = "Пароль не указан")]
        [Display(Name = "Пароль")]
        public string PasswordOld { get; set; }
        [Required(ErrorMessage = "Пароль не указан")]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        [CustomNewPasswordValidator]
        public string Password { get; set; }
        [Required(ErrorMessage = "Пароль не указан")]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [DataType(DataType.Password)]
        [Display(Name = "Подтверждение пароля")]
        public string PasswordConfirm { get; set; }
    }
}
