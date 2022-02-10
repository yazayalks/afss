namespace AFSS.Models
{
    public class PiTask
    {
        public PiTask(PiTaskType piTaskType, string value)
        {
            PiTaskType = piTaskType;
            Value = value;
        }

        public PiTaskType PiTaskType { get; set; }
        public string Value { get; set; }
    }
}
