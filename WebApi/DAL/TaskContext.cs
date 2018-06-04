using System;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.DAL
{
  public class TaskContext: DbContext
  {
    public TaskContext() : base("TaskContext")
    {
    
    }

    public DbSet<Task> Tasks { get; set; }
  }
}