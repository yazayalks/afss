﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace AFSS.Models
{
    public partial class PiUser
    {
        public PiUser()
        {
            PiData = new HashSet<PiData>();
            PiSettings = new HashSet<PiSettings>();
            PiTask = new HashSet<PiTask>();
            PiThresholds = new HashSet<PiThresholds>();
        }

        public string CpuSerial { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int Id { get; set; }

        public virtual ICollection<PiData> PiData { get; set; }
        public virtual ICollection<PiSettings> PiSettings { get; set; }
        public virtual ICollection<PiTask> PiTask { get; set; }
        public virtual ICollection<PiThresholds> PiThresholds { get; set; }
    }
}