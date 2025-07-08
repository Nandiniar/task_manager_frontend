import { TestBed } from '@angular/core/testing';

import { TaskTable } from './task-table';

describe('TaskTable', () => {
  let service: TaskTable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
