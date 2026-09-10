import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularioofertaimovel } from './formularioofertaimovel';

describe('Formularioofertaimovel', () => {
  let component: Formularioofertaimovel;
  let fixture: ComponentFixture<Formularioofertaimovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularioofertaimovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularioofertaimovel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
