using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace AFSS.Controllers
{
    public class VerifyThresholdsController : Controller
    {
        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinTmpStove(string MinTmpStove, string MaxTmpStove, string CriticalTmpStove)
        {
            if ((MinTmpStove != null) && (MaxTmpStove != null) && (CriticalTmpStove != null))
            {
                var minTmpStove = Int32.Parse(MinTmpStove);
                var maxTmpStove = Int32.Parse(MaxTmpStove);
                var criticalTmpStove = Int32.Parse(CriticalTmpStove);
                if ((minTmpStove >= maxTmpStove) || (minTmpStove >= criticalTmpStove) || (maxTmpStove >= criticalTmpStove))
                {
                    return Json(false);

                }

                if (minTmpStove < 0)
                {
                    return Json(false);

                }

                if  (maxTmpStove <= 0) 
                {
                    return Json(false);

                }
                
                if (criticalTmpStove <= 0)
                {
                    return Json(false);

                }
                return Json(true);
            }

            return Json(true);

        }
    }
}
