import { TestBed } from '@angular/core/testing';

import { Alunos } from './alunos';

describe('Alunos', () => {
  let service: Alunos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alunos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
