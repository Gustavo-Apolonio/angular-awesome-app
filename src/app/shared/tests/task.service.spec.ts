import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TestBed } from '@angular/core/testing';

import { TaskService } from '../services/task.service';
import { UtilService } from '../services/util.service';
import { MatSnackBar } from '@angular/material/snack-bar';

fdescribe('TaskService', () => {
  let service: TaskService;
  let util: UtilService
  let http: HttpClient
  let _snackBar = {
    open: () => { }
  }

  const URL = 'http://localhost:3000/tasks';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: MatSnackBar,
          useValue: _snackBar
        }
      ]
    });
    service = TestBed.inject(TaskService);
    http = TestBed.inject(HttpClient)
    util = TestBed.inject(UtilService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("#getTasks", () => {
    it(`should call 'get' method with correct URL`, () => {
      const httpSpy = spyOn(http, 'get').and.callThrough()
      service.getTasks(() => { })

      expect(httpSpy).toHaveBeenCalledOnceWith(URL)
    })

    
  })
});
