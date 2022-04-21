using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class ThresholdsViewModel
    {

        /* [Remote(action: "VerifyTmpStove", controller: "Thresholds", ErrorMessage = "Неправильный интервал")]*/
        /*[Remote("VerifyTmpStove", "Thresholds")]*/
        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpStove", controller: "VerifyThresholds", ErrorMessage = "Неправильный интервал",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string MinTmpStove { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpStove", controller: "VerifyThresholds", ErrorMessage = "Неправильный интервал",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string MaxTmpStove { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpStove", controller: "VerifyThresholds", ErrorMessage = "Неправильный интервал",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string CriticalTmpStove { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MinTmpTank { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MaxTmpTank { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string CriticalTmpTank { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MinTmpRoom { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MaxTmpRoom { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string CriticalTmpRoom { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MinWaterLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MaxWaterLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string VolumeWaterLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MinGasLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MaxGasLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string CriticalGasLevel { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MinPressureTank { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string MaxPressureTank { get; set; }
        [Required(ErrorMessage = "Не указано значение")]
        public string CriticalPressureTank { get; set; }
    }
}
