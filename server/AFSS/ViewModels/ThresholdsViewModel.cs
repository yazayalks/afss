using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace AFSS.ViewModels
{
    public class ThresholdsViewModel
    {
        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpStove", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string MinTmpStove { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxTmpStove", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string MaxTmpStove { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyCriticalTmpStove", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpStove) + "," + nameof(MaxTmpStove) + "," + nameof(CriticalTmpStove))]
        public string CriticalTmpStove { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpTank) + "," + nameof(MaxTmpTank) + "," + nameof(CriticalTmpTank))]
        public string MinTmpTank { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxTmpTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpTank) + "," + nameof(MaxTmpTank) + "," + nameof(CriticalTmpTank))]
        public string MaxTmpTank { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyCriticalTmpTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpTank) + "," + nameof(MaxTmpTank) + "," + nameof(CriticalTmpTank))]
        public string CriticalTmpTank { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinTmpRoom", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpRoom) + "," + nameof(MaxTmpRoom) + "," + nameof(CriticalTmpRoom))]
        public string MinTmpRoom { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxTmpRoom", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpRoom) + "," + nameof(MaxTmpRoom) + "," + nameof(CriticalTmpRoom))]
        public string MaxTmpRoom { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyCriticalTmpRoom", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinTmpRoom) + "," + nameof(MaxTmpRoom) + "," + nameof(CriticalTmpRoom))]
        public string CriticalTmpRoom { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinWaterLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinWaterLevel) + "," + nameof(MaxWaterLevel) + "," + nameof(VolumeWaterLevel))]
        public string MinWaterLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxWaterLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinWaterLevel) + "," + nameof(MaxWaterLevel) + "," + nameof(VolumeWaterLevel))]
        public string MaxWaterLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyVolumeWaterLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinWaterLevel) + "," + nameof(MaxWaterLevel) + "," + nameof(VolumeWaterLevel))]
        public string VolumeWaterLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinGasLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinGasLevel) + "," + nameof(MaxGasLevel) + "," + nameof(CriticalGasLevel))]
        public string MinGasLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxGasLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinGasLevel) + "," + nameof(MaxGasLevel) + "," + nameof(CriticalGasLevel))]
        public string MaxGasLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyCriticalGasLevel", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinGasLevel) + "," + nameof(MaxGasLevel) + "," + nameof(CriticalGasLevel))]
        public string CriticalGasLevel { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMinPressureTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinPressureTank) + "," + nameof(MaxPressureTank) + "," + nameof(CriticalPressureTank))]
        public string MinPressureTank { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyMaxPressureTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinPressureTank) + "," + nameof(MaxPressureTank) + "," + nameof(CriticalPressureTank))]
        public string MaxPressureTank { get; set; }

        [Required(ErrorMessage = "Не указано значение")]
        [Remote(action: "VerifyCriticalPressureTank", controller: "VerifyThresholds",
            AdditionalFields = nameof(MinPressureTank) + "," + nameof(MaxPressureTank) + "," + nameof(CriticalPressureTank))]
        public string CriticalPressureTank { get; set; }
    }
}
