// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace AFSS.Models
{
    public partial class PiThresholds
    {
        public int MinTmpStove { get; set; }
        public int MaxTmpStove { get; set; }
        public int CriticalTmpStove { get; set; }
        public int MinTmpTank { get; set; }
        public int MaxTmpTank { get; set; }
        public int CriticalTmpTank { get; set; }
        public int MinTmpRoom { get; set; }
        public int MaxTmpRoom { get; set; }
        public int CriticalTmpRoom { get; set; }
        public int MinWaterLevel { get; set; }
        public int MaxWaterLevel { get; set; }
        public int VolumeWaterLevel { get; set; }
        public int MinGasLevel { get; set; }
        public int MaxGasLevel { get; set; }
        public int CriticalGasLevel { get; set; }
        public int MinPressureTank { get; set; }
        public int MaxPressureTank { get; set; }
        public int CriticalPressureTank { get; set; }
        public DateTime Date { get; set; }
        public int PiKeyId { get; set; }
        public int Id { get; set; }

        public virtual PiUser PiKey { get; set; }
    }
}