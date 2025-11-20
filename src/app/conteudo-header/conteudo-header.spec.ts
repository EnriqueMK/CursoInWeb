import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoHeader } from './conteudo-header';

describe('ConteudoHeader', () => {
  let component: ConteudoHeader;
  let fixture: ComponentFixture<ConteudoHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
