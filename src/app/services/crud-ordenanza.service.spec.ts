import { TestBed } from '@angular/core/testing';

import { CrudOrdenanzaService } from './crud-ordenanza.service';

describe('CrudOrdenanzaService', () => {
  let service: CrudOrdenanzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudOrdenanzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
