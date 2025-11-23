import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCadastro } from './alterar-cadastro';

describe('AlterarCadastro', () => {
  let component: AlterarCadastro;
  let fixture: ComponentFixture<AlterarCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
