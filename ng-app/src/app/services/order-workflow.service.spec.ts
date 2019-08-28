import { TestBed } from '@angular/core/testing';

import { OrderWorkflowService } from './order-workflow.service';

describe('OrderStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderWorkflowService = TestBed.get(OrderWorkflowService);
    expect(service).toBeTruthy();
  });
});
