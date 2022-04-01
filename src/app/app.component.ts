import { Component, OnInit } from '@angular/core';

import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Awesome App';

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  error(_snackBar: MatSnackBar) {
    _snackBar.open('An error occurred... Try again later.', 'Ok...', {
      duration: 5000,
    });
  }

  getTasks() {
    this.taskService.getTasks(this.error).subscribe((tasks: Task[]) => {
      this.tasks = this.utilService.sort(tasks);
    });
  }
}
