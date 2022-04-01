import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  sort(tasks: Task[]) {
    tasks = tasks.sort(this.sortById);
    tasks = tasks.sort(this.sortByStatus);

    return tasks;
  }

  private sortById(task_a: Task, task_b: Task) {
    if (task_a.id > task_b.id) return -1;
    if (task_a.id < task_b.id) return 1;
    return 0;
  }

  private sortByStatus(task_a: Task, task_b: Task) {
    let compare_a = task_a.status.done ? 1 : -1;
    let compare_b = task_b.status.done ? 1 : -1;

    if (compare_a < compare_b) return -1;
    if (compare_a > compare_b) return 1;
    return 0;
  }
}
