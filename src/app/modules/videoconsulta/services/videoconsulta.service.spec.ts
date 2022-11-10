import { TestBed } from '@angular/core/testing';

import { VideoconsultaService } from './videoconsulta.service';

describe('VideoconsultaService', () => {
  let service: VideoconsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoconsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
