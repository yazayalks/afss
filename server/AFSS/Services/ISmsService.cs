namespace AFSS.Services
{
    public interface ISmsService
    {
        public Task SendMessage(string message, string phone);
    }
}
