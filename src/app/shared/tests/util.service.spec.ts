import { TestBed } from '@angular/core/testing';
import { Task } from '../../models/task';

import { UtilService } from '../services/util.service';

describe('UtilService', () => {
  let service: UtilService;

  let tasksMock: Task[];

  const tasksDefault: Task[] = [
    {
      id: 2,
      name: 'Example #002',
      status: { name: 'waiting', done: false },
    },
    {
      id: 1,
      name: 'Example #001',
      status: { name: 'done', done: true },
    },
    {
      id: 3,
      name: 'Example #003',
      status: { name: 'waiting', done: false },
    },
  ];

  const tasksId: Task[] = [
    {
      id: 1,
      name: 'Example #001',
      status: { name: 'done', done: true },
    },
    {
      id: 2,
      name: 'Example #002',
      status: { name: 'waiting', done: false },
    },
    {
      id: 3,
      name: 'Example #003',
      status: { name: 'waiting', done: false },
    },
  ];

  const tasksStatus: Task[] = [
    {
      id: 2,
      name: 'Example #002',
      status: { name: 'waiting', done: false },
    },
    {
      id: 3,
      name: 'Example #003',
      status: { name: 'waiting', done: false },
    },
    {
      id: 1,
      name: 'Example #001',
      status: { name: 'done', done: true },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);

    tasksMock = [...tasksDefault];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort an array of tasks by task.id', () => {
    expect(tasksMock).toEqual(tasksDefault);

    tasksMock.sort(service.sortById);

    expect(tasksMock).toEqual(tasksId);
  });

  it('should sort an array of tasks by task.status', () => {
    expect(tasksMock).toEqual(tasksDefault);

    tasksMock.sort(service.sortByStatus);

    expect(tasksMock).toEqual(tasksStatus);
  });
});
