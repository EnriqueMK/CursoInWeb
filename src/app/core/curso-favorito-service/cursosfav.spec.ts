import { TestBed } from '@angular/core/testing';

import { Cursosfav } from './cursosfav';

describe('Cursosfav', () => {
  let service: Cursosfav;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cursosfav);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
