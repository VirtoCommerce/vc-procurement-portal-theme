import { TestBed } from '@angular/core/testing';

import { ProductConverterService } from './product-converter.service';

describe('ProductConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductConverterService = TestBed.get(ProductConverterService);
    expect(service).toBeTruthy();
  });
});
