import { TestBed } from '@angular/core/testing';

import { MobileViewService } from './mobile-view.service';

describe('MobileSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileViewService = TestBed.get(MobileViewService);
    expect(service).toBeTruthy();
  });
});
