import { TestBed } from '@angular/core/testing';

import { CrudEjesService } from './crud-ejes.service';

describe('CrudEjesService', () => {
  let service: CrudEjesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudEjesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
