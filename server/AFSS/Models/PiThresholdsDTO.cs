namespace AFSS.Models
{
    public class PiThresholdsDTO
    {
        public int minTmpStove { get; set; }
        public int maxTmpStove { get; set; }
        public int criticalTmpStove { get; set; }

        public int minTmpTank { get; set; }
        public int maxTmpTank { get; set; }
        public int criticalTmpTank { get; set; }

        public int minTmpRoom { get; set; }
        public int maxTmpRoom { get; set; }
        public int criticalTmpRoom { get; set; }

        public int minWaterLevel { get; set; }
        public int maxWaterLevel { get; set; }
        public int volumeWaterLevel { get; set; }

        public int minGasLevel { get; set; }
        public int maxGasLevel { get; set; }
        public int criticalGasLevel { get; set; }


        public int minPressureTank { get; set; }
        public int maxPressureTank { get; set; }
        public int criticalPressureTank { get; set; }
        
    }
}