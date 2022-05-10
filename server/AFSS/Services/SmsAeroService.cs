using AFSS.Services;
using RestSharp;
using RestSharp.Authenticators;

namespace AFSS.Utilities
{
    public class SmsAeroService : ISmsService
    {
        public async Task SendMessage(string message, string phone)
        {
            var client = new RestClient($"https://email:api_key@gate.smsaero.ru/v2/sms/send?number={phone}&text={message}&sign=SMS Aero");
            client.Authenticator = new HttpBasicAuthenticator("lysak_kirill@mail.ru", "d7GNLRoD1ZgKZ76F69zbvjW1yoaI");
            var request = new RestRequest();
     
            var response = await client.ExecuteAsync(request);
            Console.WriteLine(response.Content);
        }
    }
}
