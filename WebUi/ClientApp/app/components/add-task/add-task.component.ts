import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public taskForm: FormGroup; 
  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'id': new FormControl(),
      'title': new FormControl(),
      'description': new FormControl(),
      'group': new FormControl(),
      'when': new FormControl()
    });
  }

  add() {
    this.tasksService.add(this.taskForm.value).subscribe((task) => {
        this.router.navigate(['all']);
      },
      (er) => {
        console.log(er);
      });
  }

}
