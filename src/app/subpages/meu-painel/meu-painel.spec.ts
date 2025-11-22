import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPainel } from './meu-painel';

describe('MeuPainel', () => {
  let component: MeuPainel;
  let fixture: ComponentFixture<MeuPainel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuPainel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPainel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
