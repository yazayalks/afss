using System;

namespace AFSS.Models
{
    public class PiData
    {
        public double Tmp0 { get; set; }
        public double? Tmp1 { get; set; }
        public double? Tmp2 { get; set; }
        public double Pressure { get; set; }
        public int Gas { get; set; }
        public int Water { get; set; }
        public int Servo0 { get; set; }
        public int Servo1 { get; set; }
        public DateTime Date { get; set; }

    }
}
