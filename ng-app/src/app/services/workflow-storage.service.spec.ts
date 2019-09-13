import { TestBed } from '@angular/core/testing';

import { WorkflowStorageService } from './workflow-storage.service';

describe('WorkflowStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowStorageService = TestBed.get(WorkflowStorageService);
    expect(service).toBeTruthy();
  });
});
