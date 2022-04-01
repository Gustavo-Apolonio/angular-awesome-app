import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private modal: MatDialog,
    private _snackBar: MatSnackBar,
    private taskService: TaskService
  ) {}

  @Input() tasks: Task[] = [];

  ngOnInit(): void {}

  taskTitle: string = '';

  openModal() {
    const dialogRef = this.modal.open(AddTaskComponent, {
      width: '250px',
      data: { taskTitle: this.taskTitle },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const task = {
          name: result,
          status: {
            name: 'waiting',
            done: false,
          },
        } as Task;
        this.taskService.addTask(task, this.error).subscribe((task: Task) => {
          this.tasks.unshift(task);
          this._snackBar.open(
            `Task '${result}' added successfully! #.#`,
            'Yep'
          );
        });
      }
    });
  }

  error(_snackBar: MatSnackBar) {
    _snackBar.open('An error occurred... Try again later.', 'Ok...');
  }
}
