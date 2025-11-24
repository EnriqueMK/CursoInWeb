import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFavoritos } from './cursos-favoritos';

describe('CursosFavoritos', () => {
  let component: CursosFavoritos;
  let fixture: ComponentFixture<CursosFavoritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosFavoritos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosFavoritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
