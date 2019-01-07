import { TestBed } from '@angular/core/testing';

import { MockEventoService } from './mock-evento.service';

describe('MockEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockEventoService = TestBed.get(MockEventoService);
    expect(service).toBeTruthy();
  });
});
