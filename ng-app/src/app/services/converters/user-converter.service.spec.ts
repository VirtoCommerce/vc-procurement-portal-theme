import { TestBed } from '@angular/core/testing';

import { UserConverterService } from './user-converter.service';

describe('UserConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserConverterService = TestBed.get(UserConverterService);
    expect(service).toBeTruthy();
  });
});
