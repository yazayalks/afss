using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class ObserveViewModel
    {
        [Required(ErrorMessage = "Имя не указано")]
        [Display(Name = "Имя")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Ключ не указан")]
        [Display(Name = "Ключ")]
        public string PiKey { get; set; }
        public string ReturnUrl { get; set; }
    }
}
