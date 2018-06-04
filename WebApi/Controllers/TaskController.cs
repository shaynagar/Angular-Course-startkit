using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.DAL;
using WebApi.Models;

namespace WebApi.Controllers
{
  [EnableCors("*", "*", "PUT, POST ,DELETE")]
  public class TaskController : ApiController
  {
    // GET api/task
    public IEnumerable<Task> Get()
    {
      using (TaskContext taskContext = new TaskContext())
      {
        return taskContext.Tasks.ToList();
      }
    }

    // GET api/task/:id
    public Task Get(int id)
    {
      using (TaskContext taskContext = new TaskContext())
      {
        return taskContext.Tasks.Single(t => t.Id == id);
      }
    }

    // POST api/task
    public void Post([FromBody]Task value)
    {
      using (TaskContext taskContext = new TaskContext())
      {
        taskContext.Tasks.Add(value);
        taskContext.SaveChanges();
      }
    }

    // PUT api/task/:id
    public void Put(int id, [FromBody]Task value)
    {
      using (TaskContext taskContext = new TaskContext())
      {
        var task = taskContext.Tasks.Single(t => t.Id == id);
        task.Description = value.Description;
        task.Group = value.Group;
        task.Title = value.Title;
        task.When = value.When;
        taskContext.SaveChanges();
      }
    }

    // DELETE api/task/:id
    public void Delete(int id)
    {
      using (TaskContext taskContext = new TaskContext())
      {
        var task = taskContext.Tasks.Single(t => t.Id == id);
        taskContext.Tasks.Remove(task);
        taskContext.SaveChanges();
      }
    }
  }
}