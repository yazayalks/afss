using System;
using System.Collections.Generic;

#nullable disable

namespace AFSS.DbContexts
{
    public partial class PiDatum
    {
        public double Tmp0 { get; set; }
        public double? Tmp1 { get; set; }
        public double? Tmp2 { get; set; }
        public double Pressure { get; set; }
        public int Gas { get; set; }
        public int Water { get; set; }
        public int Servo0 { get; set; }
        public int Servo1 { get; set; }
        public int PiUserId { get; set; }
        public DateTime Date { get; set; }
        public int Id { get; set; }

        public virtual PiUser PiUser { get; set; }
    }
}
