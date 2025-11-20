import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSomos } from './quem-somos';

describe('QuemSomos', () => {
  let component: QuemSomos;
  let fixture: ComponentFixture<QuemSomos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuemSomos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemSomos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
