import { TestBed } from '@angular/core/testing';

import { AppConfig } from './app-config.service';

describe('AppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfig = TestBed.get(AppConfig);
    expect(service).toBeTruthy();
  });
});
