using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Почта не указана")]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Почта необходима от 3 до 30 символов")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Ключ не указан")]
        [Display(Name = "Ключ")]
        public string PiKey { get; set; }

        [Required(ErrorMessage = "Пароль не указан")]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Подтверждение пароля не указано")]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [DataType(DataType.Password)]
        [Display(Name = "Подтверждение пароля")]
        public string PasswordConfirm { get; set; }
    }
}
