import { TestBed } from '@angular/core/testing';

import { ApiSuplierService } from './api-suplier.service';

describe('ApiSuplierService', () => {
  let service: ApiSuplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSuplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
