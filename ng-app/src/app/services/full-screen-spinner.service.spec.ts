import { TestBed } from '@angular/core/testing';

import { FullScreenSpinnerService } from './full-screen-spinner.service';

describe('FullScreenSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullScreenSpinnerService = TestBed.get(FullScreenSpinnerService);
    expect(service).toBeTruthy();
  });
});
