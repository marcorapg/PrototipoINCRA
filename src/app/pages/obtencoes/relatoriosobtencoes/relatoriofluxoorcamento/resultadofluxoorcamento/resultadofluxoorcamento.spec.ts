import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadofluxoorcamento } from './resultadofluxoorcamento';

describe('Resultadofluxoorcamento', () => {
  let component: Resultadofluxoorcamento;
  let fixture: ComponentFixture<Resultadofluxoorcamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadofluxoorcamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadofluxoorcamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
