import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadoorcamentoadjudicacao } from './resultadoorcamentoadjudicacao';

describe('Resultadoorcamentoadjudicacao', () => {
  let component: Resultadoorcamentoadjudicacao;
  let fixture: ComponentFixture<Resultadoorcamentoadjudicacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadoorcamentoadjudicacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadoorcamentoadjudicacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
