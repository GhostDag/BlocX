using BlocXAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlocXAPI.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}