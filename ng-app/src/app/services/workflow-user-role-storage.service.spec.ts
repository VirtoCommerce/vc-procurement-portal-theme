import { TestBed } from '@angular/core/testing';

import { WorkflowUserRoleStorageService } from './workflow-user-role-storage.service';

describe('WorkflowUserRoleStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowUserRoleStorageService = TestBed.get(WorkflowUserRoleStorageService);
    expect(service).toBeTruthy();
  });
});
