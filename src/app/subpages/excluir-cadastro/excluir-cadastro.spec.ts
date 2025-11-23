import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCadastro } from './excluir-cadastro';

describe('ExcluirCadastro', () => {
  let component: ExcluirCadastro;
  let fixture: ComponentFixture<ExcluirCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
