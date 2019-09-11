import { TestBed } from '@angular/core/testing';

import { ActiveOrderService } from './active-order.service';

describe('ActiveOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveOrderService = TestBed.get(ActiveOrderService);
    expect(service).toBeTruthy();
  });
});
