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

                if ((minTmpStove < 0) || (minTmpStove > 500))
                {
                    return Json($"Значение {editValue(minTmpStove)} недопустимо.");
                }

                if ((minTmpStove >= maxTmpStove) || (minTmpStove >= criticalTmpStove))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxTmpStove(string MinTmpStove, string MaxTmpStove, string CriticalTmpStove)
        {
            if ((MinTmpStove != null) && (MaxTmpStove != null) && (CriticalTmpStove != null))
            {
                var minTmpStove = Int32.Parse(MinTmpStove);
                var maxTmpStove = Int32.Parse(MaxTmpStove);
                var criticalTmpStove = Int32.Parse(CriticalTmpStove);

                if ((maxTmpStove <= 0) || (maxTmpStove > 500))
                {
                    return Json($"Значение {editValue(maxTmpStove)} недопустимо.");
                }

                if ((minTmpStove >= maxTmpStove) || (maxTmpStove >= criticalTmpStove))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyCriticalTmpStove(string MinTmpStove, string MaxTmpStove, string CriticalTmpStove)
        {
            if ((MinTmpStove != null) && (MaxTmpStove != null) && (CriticalTmpStove != null))
            {
                var minTmpStove = Int32.Parse(MinTmpStove);
                var maxTmpStove = Int32.Parse(MaxTmpStove);
                var criticalTmpStove = Int32.Parse(CriticalTmpStove);

                if ((criticalTmpStove <= 0) || (criticalTmpStove > 500))
                {
                    return Json($"Значение {editValue(criticalTmpStove)} недопустимо.");
                }

                if ((minTmpStove >= criticalTmpStove) || (maxTmpStove >= criticalTmpStove))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinTmpTank(string MinTmpTank, string MaxTmpTank, string CriticalTmpTank)
        {
            if ((MinTmpTank != null) && (MaxTmpTank != null) && (CriticalTmpTank != null))
            {
                var minTmpTank = Int32.Parse(MinTmpTank);
                var maxTmpTank = Int32.Parse(MaxTmpTank);
                var criticalTmpTank = Int32.Parse(CriticalTmpTank);

                if ((minTmpTank < 0) || (minTmpTank > 500))
                {
                    return Json($"Значение {editValue(minTmpTank)} недопустимо.");
                }

                if ((minTmpTank >= maxTmpTank) || (minTmpTank >= criticalTmpTank))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxTmpTank(string MinTmpTank, string MaxTmpTank, string CriticalTmpTank)
        {
            if ((MinTmpTank != null) && (MaxTmpTank != null) && (CriticalTmpTank != null))
            {
                var minTmpTank = Int32.Parse(MinTmpTank);
                var maxTmpTank = Int32.Parse(MaxTmpTank);
                var criticalTmpTank = Int32.Parse(CriticalTmpTank);

                if ((maxTmpTank <= 0) || (maxTmpTank > 500))
                {
                    return Json($"Значение {editValue(maxTmpTank)} недопустимо.");
                }

                if ((minTmpTank >= maxTmpTank) || (maxTmpTank >= criticalTmpTank))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyCriticalTmpTank(string MinTmpTank, string MaxTmpTank, string CriticalTmpTank)
        {
            if ((MinTmpTank != null) && (MaxTmpTank != null) && (CriticalTmpTank != null))
            {
                var minTmpTank = Int32.Parse(MinTmpTank);
                var maxTmpTank = Int32.Parse(MaxTmpTank);
                var criticalTmpTank = Int32.Parse(CriticalTmpTank);

                if ((criticalTmpTank <= 0) || (criticalTmpTank > 500))
                {
                    return Json($"Значение {editValue(criticalTmpTank)} недопустимо.");
                }

                if ((minTmpTank >= criticalTmpTank) || (maxTmpTank >= criticalTmpTank))
                {
                    return Json($"Значение вне интервала.");

                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinTmpRoom(string MinTmpRoom, string MaxTmpRoom, string CriticalTmpRoom)
        {
            if ((MinTmpRoom != null) && (MaxTmpRoom != null) && (CriticalTmpRoom != null))
            {
                var minTmpRoom = Int32.Parse(MinTmpRoom);
                var maxTmpRoom = Int32.Parse(MaxTmpRoom);
                var criticalTmpRoom = Int32.Parse(CriticalTmpRoom);

                if ((minTmpRoom < 0) || (minTmpRoom > 500))
                {
                    return Json($"Значение {editValue(minTmpRoom)} недопустимо.");
                }

                if ((minTmpRoom >= maxTmpRoom) || (minTmpRoom >= criticalTmpRoom))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);

        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxTmpRoom(string MinTmpRoom, string MaxTmpRoom, string CriticalTmpRoom)
        {
            if ((MinTmpRoom != null) && (MaxTmpRoom != null) && (CriticalTmpRoom != null))
            {
                var minTmpRoom = Int32.Parse(MinTmpRoom);
                var maxTmpRoom = Int32.Parse(MaxTmpRoom);
                var criticalTmpRoom = Int32.Parse(CriticalTmpRoom);

                if ((maxTmpRoom <= 0) || (maxTmpRoom > 500))
                {
                    return Json($"Значение {editValue(maxTmpRoom)} недопустимо.");
                }

                if ((minTmpRoom >= maxTmpRoom) || (maxTmpRoom >= criticalTmpRoom))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyCriticalTmpRoom(string MinTmpRoom, string MaxTmpRoom, string CriticalTmpRoom)
        {
            if ((MinTmpRoom != null) && (MaxTmpRoom != null) && (CriticalTmpRoom != null))
            {
                var minTmpRoom = Int32.Parse(MinTmpRoom);
                var maxTmpRoom = Int32.Parse(MaxTmpRoom);
                var criticalTmpRoom = Int32.Parse(CriticalTmpRoom);

                if ((criticalTmpRoom <= 0) || (criticalTmpRoom > 500))
                {
                    return Json($"Значение {editValue(criticalTmpRoom)} недопустимо.");
                }

                if ((minTmpRoom >= criticalTmpRoom) || (maxTmpRoom >= criticalTmpRoom))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinGasLevel(string MinGasLevel, string MaxGasLevel, string CriticalGasLevel)
        {
            if ((MinGasLevel != null) && (MaxGasLevel != null) && (CriticalGasLevel != null))
            {
                var minGasLevel = Int32.Parse(MinGasLevel);
                var maxGasLevel = Int32.Parse(MaxGasLevel);
                var criticalGasLevel = Int32.Parse(CriticalGasLevel);
                if ((minGasLevel < 0) || (minGasLevel > 500))
                {
                    return Json($"Значение {editValue(minGasLevel)} недопустимо.");
                }

                if ((minGasLevel >= maxGasLevel) || (minGasLevel >= criticalGasLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxGasLevel(string MinGasLevel, string MaxGasLevel, string CriticalGasLevel)
        {
            if ((MinGasLevel != null) && (MaxGasLevel != null) && (CriticalGasLevel != null))
            {
                var minGasLevel = Int32.Parse(MinGasLevel);
                var maxGasLevel = Int32.Parse(MaxGasLevel);
                var criticalGasLevel = Int32.Parse(CriticalGasLevel);
                if ((maxGasLevel <= 0) || (maxGasLevel > 500))
                {
                    return Json($"Значение {editValue(maxGasLevel)} недопустимо.");
                }

                if ((minGasLevel >= maxGasLevel) || (maxGasLevel >= criticalGasLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyCriticalGasLevel(string MinGasLevel, string MaxGasLevel, string CriticalGasLevel)
        {
            if ((MinGasLevel != null) && (MaxGasLevel != null) && (CriticalGasLevel != null))
            {
                var minGasLevel = Int32.Parse(MinGasLevel);
                var maxGasLevel = Int32.Parse(MaxGasLevel);
                var criticalGasLevel = Int32.Parse(CriticalGasLevel);
                if ((criticalGasLevel <= 0) || (criticalGasLevel > 500))
                {
                    return Json($"Значение {editValue(criticalGasLevel)} недопустимо.");
                }

                if ((minGasLevel >= criticalGasLevel) || (maxGasLevel >= criticalGasLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinPressureTank(string MinPressureTank, string MaxPressureTank, string CriticalPressureTank)
        {
            if ((MinPressureTank != null) && (MaxPressureTank != null) && (CriticalPressureTank != null))
            {
                var minPressureTank = Int32.Parse(MinPressureTank);
                var maxPressureTank = Int32.Parse(MaxPressureTank);
                var criticalPressureTank = Int32.Parse(CriticalPressureTank);
                if ((minPressureTank < 0) || (minPressureTank > 500))
                {
                    return Json($"Значение {editValue(minPressureTank)} недопустимо.");
                }

                if ((minPressureTank >= maxPressureTank) || (minPressureTank >= criticalPressureTank))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxPressureTank(string MinPressureTank, string MaxPressureTank, string CriticalPressureTank)
        {
            if ((MinPressureTank != null) && (MaxPressureTank != null) && (CriticalPressureTank != null))
            {
                var minPressureTank = Int32.Parse(MinPressureTank);
                var maxPressureTank = Int32.Parse(MaxPressureTank);
                var criticalPressureTank = Int32.Parse(CriticalPressureTank);
                if ((maxPressureTank <= 0) || (maxPressureTank > 500))
                {
                    return Json($"Значение {editValue(maxPressureTank)} недопустимо.");
                }

                if ((minPressureTank >= maxPressureTank) || (maxPressureTank >= criticalPressureTank))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyCriticalPressureTank(string MinPressureTank, string MaxPressureTank, string CriticalPressureTank)
        {
            if ((MinPressureTank != null) && (MaxPressureTank != null) && (CriticalPressureTank != null))
            {
                var minPressureTank = Int32.Parse(MinPressureTank);
                var maxPressureTank = Int32.Parse(MaxPressureTank);
                var criticalPressureTank = Int32.Parse(CriticalPressureTank);
                if ((criticalPressureTank <= 0) || (criticalPressureTank > 500))
                {
                    return Json($"Значение {editValue(criticalPressureTank)} недопустимо.");
                }

                if ((minPressureTank >= criticalPressureTank) || (maxPressureTank >= criticalPressureTank))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMinWaterLevel(string MinWaterLevel, string MaxWaterLevel, string VolumeWaterLevel)
        {
            if ((MinWaterLevel != null) && (MaxWaterLevel != null) && (VolumeWaterLevel != null))
            {
                var minWaterLevel = Int32.Parse(MinWaterLevel);
                var maxWaterLevel = Int32.Parse(MaxWaterLevel);
                var volumeWaterLevel = Int32.Parse(VolumeWaterLevel);
                if ((minWaterLevel < 0) || (minWaterLevel > 100))
                {
                    return Json($"Значение {editValue(minWaterLevel)} недопустимо.");
                }

                if ((minWaterLevel >= maxWaterLevel) || (minWaterLevel >= volumeWaterLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyMaxWaterLevel(string MinWaterLevel, string MaxWaterLevel, string VolumeWaterLevel)
        {
            if ((MinWaterLevel != null) && (MaxWaterLevel != null) && (VolumeWaterLevel != null))
            {
                var minWaterLevel = Int32.Parse(MinWaterLevel);
                var maxWaterLevel = Int32.Parse(MaxWaterLevel);
                var volumeWaterLevel = Int32.Parse(VolumeWaterLevel);
                if ((maxWaterLevel <= 0) || (maxWaterLevel > 100))
                {
                    return Json($"Значение {editValue(maxWaterLevel)} недопустимо.");
                }

                if ((minWaterLevel >= maxWaterLevel) || (maxWaterLevel >= volumeWaterLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        [AcceptVerbs("Get", "Post")]
        public IActionResult VerifyVolumeWaterLevel(string MinWaterLevel, string MaxWaterLevel, string VolumeWaterLevel)
        {
            if ((MinWaterLevel != null) && (MaxWaterLevel != null) && (VolumeWaterLevel != null))
            {
                var minWaterLevel = Int32.Parse(MinWaterLevel);
                var maxWaterLevel = Int32.Parse(MaxWaterLevel);
                var volumeWaterLevel = Int32.Parse(VolumeWaterLevel);
                if ((volumeWaterLevel <= 0) || (volumeWaterLevel > 100))
                {
                    return Json($"Значение {editValue(volumeWaterLevel)} недопустимо.");
                }

                if ((minWaterLevel >= volumeWaterLevel) || (maxWaterLevel >= volumeWaterLevel))
                {
                    return Json($"Значение вне интервала.");
                }

                return Json(true);
            }

            return Json(true);
        }

        public string editValue(int value)
        {
            var str = value.ToString();
            if (str.Length > 3)
            {
                str = str.Substring(0, 3);
                str = string.Concat(str, "...");
                return str;
            }
            else
            {
                return str;
            }
            
        }
    }
    
}
