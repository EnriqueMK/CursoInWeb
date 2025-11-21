import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoInicial } from './conteudo-inicial';

describe('ConteudoInicial', () => {
  let component: ConteudoInicial;
  let fixture: ComponentFixture<ConteudoInicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoInicial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoInicial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
