using AFSS.Validators;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class DataUserViewModel
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string PasswordOld { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        
    }
}
