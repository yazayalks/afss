using System;
using System.Collections.Generic;

#nullable disable

namespace AFSS.DbContexts
{
    public partial class PiUser
    {
        public PiUser()
        {
            PiData = new HashSet<PiDatum>();
        }

        public string CpuSerial { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int Id { get; set; }

        public virtual ICollection<PiDatum> PiData { get; set; }
    }
}
