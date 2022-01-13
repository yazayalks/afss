using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AFSS.DbContexts
{
    public partial class AfssDbContext : DbContext
    {
        public AfssDbContext()
        {
        }

        public AfssDbContext(DbContextOptions<AfssDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PiDatum> PiData { get; set; }
        public virtual DbSet<PiUser> PiUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=31.31.196.234;Initial Catalog=u1410979_afss;Persist Security Info=True;User ID=u1410979_afss;Password=MrNimbus123");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("u1410979_afss")
                .HasAnnotation("Relational:Collation", "Cyrillic_General_CI_AS");

            modelBuilder.Entity<PiDatum>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PiData_pk")
                    .IsClustered(false);

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Gas).HasColumnName("gas");

                entity.Property(e => e.PiUserId).HasColumnName("piUserId");

                entity.Property(e => e.Pressure).HasColumnName("pressure");

                entity.Property(e => e.Servo0).HasColumnName("servo0");

                entity.Property(e => e.Servo1).HasColumnName("servo1");

                entity.Property(e => e.Tmp0).HasColumnName("tmp0");

                entity.Property(e => e.Tmp1).HasColumnName("tmp1");

                entity.Property(e => e.Tmp2).HasColumnName("tmp2");

                entity.Property(e => e.Water).HasColumnName("water");

                entity.HasOne(d => d.PiUser)
                    .WithMany(p => p.PiData)
                    .HasForeignKey(d => d.PiUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PiData_PiUser_id_fk");
            });

            modelBuilder.Entity<PiUser>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PiUser_pk")
                    .IsClustered(false);

                entity.ToTable("PiUser");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CpuSerial)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("cpuSerial");

                entity.Property(e => e.Login)
                    .HasMaxLength(40)
                    .HasColumnName("login");

                entity.Property(e => e.Password)
                    .HasMaxLength(40)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
