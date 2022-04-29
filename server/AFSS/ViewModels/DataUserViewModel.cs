using AFSS.Validators;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class DataUserViewModel
    {
        /*[Required(ErrorMessage = "Почта не указана")]
        [Display(Name = "Почта")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Имя не указано")]
        [Display(Name = "Имя")]
        public string Name { get; set; }
        public string Type { get; set; }*/
        /*[CustomEmailValidator]*/
        public string Email { get; set; }
        /*public EmailViewModel Email { get; set; }*/
        /*[CustomNameValidator]*/
        public string Name { get; set; }

        public string Phone { get; set; }

        public string PasswordOld { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        
    }
}
