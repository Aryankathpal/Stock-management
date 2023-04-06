import { TestBed } from '@angular/core/testing';

import { ApiSalesService } from './api-sales.service';

describe('ApiSalesService', () => {
  let service: ApiSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
