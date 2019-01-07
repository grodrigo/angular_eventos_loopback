import { TestBed } from '@angular/core/testing';

import { AbstractEventoService } from './abstract-evento.service';

describe('AbstractEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractEventoService = TestBed.get(AbstractEventoService);
    expect(service).toBeTruthy();
  });
});
