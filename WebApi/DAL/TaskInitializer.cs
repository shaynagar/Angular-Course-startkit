using System.Collections.Generic;
using System.Data.Entity;
using WebApi.Models;

namespace WebApi.DAL
{
  public class TaskInitializer: DropCreateDatabaseIfModelChanges<TaskContext>
  {
    protected override void Seed(TaskContext context)
    {
      var tasks = new List<Task>
      {
        new Task {Id = 1, Group = "b", Description = "clean my hourse", Title = "clean", When = "2016-12-12T21:20:00Z"},
        new Task {Id = 2, Group = "b", Description = "take child bath", Title = "bath", When = "2016-12-12T21:20:00Z"},
      };

      tasks.ForEach(t => context.Tasks.Add(t));
      context.SaveChanges();
           
    }
  }
}