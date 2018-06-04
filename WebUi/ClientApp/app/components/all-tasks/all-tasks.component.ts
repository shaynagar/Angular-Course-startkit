import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../shared/tasks.service';
import { ITask } from '../../models/Task.class';

@Component({
  selector: 'all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  public taskList:ITask[] = [];
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.tasksService.getAll().subscribe(data => this.taskList = data);
  }
  remove(task: ITask) {
    this.tasksService.remove(task).subscribe(data => {
      const index: number = this.taskList.indexOf(task);
      if (index !== -1) {
        this.taskList.splice(index, 1);
      }
    });
  }

  edit(task: ITask) {
    task.title = task.title + Math.floor(Math.random() * 10).toString();
    this.tasksService.edit(task).subscribe(data => {
      this.get();
    });
  }
}
