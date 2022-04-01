import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Task } from '../models/task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  URL = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) {}

  HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTasks(errorCallBack: Function): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.URL).pipe(
      retry(2),
      catchError((error) => this.handleError(error, errorCallBack))
    );
  }

  updateTask(task: Task, errorCallBack: Function): Observable<Task> {
    return this.httpClient
      .put<Task>(
        `${this.URL}/${task.id}`,
        JSON.stringify(task),
        this.HttpOptions
      )
      .pipe(
        retry(1),
        catchError((error) => this.handleError(error, errorCallBack, task))
      );
  }

  handleError(error: HttpErrorResponse, errorCallBack: Function, task?: Task) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
    else
      errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;

    errorCallBack(this._snackBar, task);

    return throwError(errorMessage);
  }

  // future feature

  addTask(task: Task, errorCallBack: Function): Observable<Task> {
    return this.httpClient.post<Task>(this.URL, task, this.HttpOptions).pipe(
      retry(1),
      catchError((error) => this.handleError(error, errorCallBack))
    );
  }
}
