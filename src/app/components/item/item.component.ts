import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../models/task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() task = {
    id: 0,
    name: 'Loading...',
    status: {
      name: 'loading',
      done: false,
    },
  } as Task;

  @Input() tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private utilService: UtilService,
    private _snackBar: MatSnackBar
  ) {}

  error(_snackBar: MatSnackBar, task: Task) {
    task.status.done = !task.status.done;
    task.status.name = task.status.done ? 'done' : 'waiting';

    _snackBar.open('We lost connection, try again later...', 'Ok...');
  }

  updateTask() {
    this.taskService.updateTask(this.task, this.error).subscribe();

    if (this.task.status.done)
      this._snackBar.open('Task completed! ^.^', 'Yeah!');
    this.tasks = this.utilService.sort(this.tasks);
  }

  ngOnInit(): void {}

  onCheck($event: any) {
    this.task.status.done = $event.checked;
    this.task.status.name = this.task.status.done ? 'done' : 'waiting';

    this.updateTask();
  }
}
