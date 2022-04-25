using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class EditNameViewModel
    {
        [Required(ErrorMessage = "Не указано имя")]
        public string Name { get; set; }
    }
}
