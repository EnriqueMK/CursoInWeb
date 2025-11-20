import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matricule } from './matricule';

describe('Matricule', () => {
  let component: Matricule;
  let fixture: ComponentFixture<Matricule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matricule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matricule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
