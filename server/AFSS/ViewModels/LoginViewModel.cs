using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Логин не указан")]
        [Display(Name = "Логин")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Пароль не указан")]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [Display(Name = "Запомнить?")]
        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }
    }
}
