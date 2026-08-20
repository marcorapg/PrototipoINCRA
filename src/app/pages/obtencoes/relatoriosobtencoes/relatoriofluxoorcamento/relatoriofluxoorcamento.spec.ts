import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatoriofluxoorcamento } from './relatoriofluxoorcamento';

describe('Relatoriofluxoorcamento', () => {
  let component: Relatoriofluxoorcamento;
  let fixture: ComponentFixture<Relatoriofluxoorcamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatoriofluxoorcamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatoriofluxoorcamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
