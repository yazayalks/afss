using AFSS.Validators;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class NameViewModel
    {
        [Required(ErrorMessage = "Имя не указано")]
        [Display(Name = "Имя")]
        [CustomNameValidator]
        public string Name { get; set; }
    }
}
