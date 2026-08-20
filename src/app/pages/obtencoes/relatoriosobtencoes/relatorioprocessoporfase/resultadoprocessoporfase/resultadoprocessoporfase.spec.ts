import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadoprocessoporfase } from './resultadoprocessoporfase';

describe('Resultadoprocessoporfase', () => {
  let component: Resultadoprocessoporfase;
  let fixture: ComponentFixture<Resultadoprocessoporfase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadoprocessoporfase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadoprocessoporfase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
