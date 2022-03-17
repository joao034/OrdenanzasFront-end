import { TestBed } from '@angular/core/testing';

import { CrudDepartamentosService } from './crud-departamentos.service';

describe('CrudDepartamentosService', () => {
  let service: CrudDepartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDepartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
