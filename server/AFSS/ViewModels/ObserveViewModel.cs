using AFSS.Models;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{

    public class ObserveViewModel
    {
        [Required(ErrorMessage = "Имя не указано")]
        [Display(Name = "Имя")]
        public string Name { get; set; }

        [ObserveValidator]
        [Required(ErrorMessage = "Ключ не указан")]
        [Display(Name = "Ключ")]
        public string PiKey { get; set; }
    }
}
