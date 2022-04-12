using AFSS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AFSS.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class TaskCreateController : ControllerBase
    {
        private readonly AfssContext afssContext;
        private readonly ApplicationContext applicationContext;
        public TaskCreateController(AfssContext afssContext, ApplicationContext applicationContext)
        {
            this.afssContext = afssContext;
            this.applicationContext = applicationContext;
        }
        [HttpGet]
        [Authorize]
        public void Get(PiTaskType type, int value)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);      
            var userPiKey = applicationContext.Users.Single(u => u.Id == userId).PiKey;

            var piKey = afssContext.PiUser.Single(u => u.CpuSerial == userPiKey);

            var newTask = new PiTask()
            {
                Complete = false,
                CreateDate = DateTime.Now,
                PiKey = piKey,
                Value = value,
                Type = (int)type,
            };

            afssContext.PiTask.Add(newTask);
            afssContext.SaveChanges();
        }
    }
}
