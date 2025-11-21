import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCertificado } from './validar-certificado';

describe('ValidarCertificado', () => {
  let component: ValidarCertificado;
  let fixture: ComponentFixture<ValidarCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarCertificado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
