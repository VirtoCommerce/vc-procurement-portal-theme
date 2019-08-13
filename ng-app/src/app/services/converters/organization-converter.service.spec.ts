import { TestBed } from '@angular/core/testing';

import { OrganizationConverterService } from './organization-converter.service';

describe('OrganizationConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationConverterService = TestBed.get(OrganizationConverterService);
    expect(service).toBeTruthy();
  });
});
