using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class EmailViewModel
    {
        [Required(ErrorMessage = "Почта не указана")]
        [Display(Name = "Почта")]
        public string Email { get; set; }
    }
}
