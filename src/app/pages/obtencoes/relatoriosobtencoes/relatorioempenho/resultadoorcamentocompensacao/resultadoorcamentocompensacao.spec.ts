import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadoorcamentocompensacao } from './resultadoorcamentocompensacao';

describe('Resultadoorcamentocompensacao', () => {
  let component: Resultadoorcamentocompensacao;
  let fixture: ComponentFixture<Resultadoorcamentocompensacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadoorcamentocompensacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadoorcamentocompensacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
