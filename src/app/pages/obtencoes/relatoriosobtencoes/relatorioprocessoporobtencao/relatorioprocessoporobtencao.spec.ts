import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorioprocessoporobtencao } from './relatorioprocessoporobtencao';

describe('Relatorioprocessoporobtencao', () => {
  let component: Relatorioprocessoporobtencao;
  let fixture: ComponentFixture<Relatorioprocessoporobtencao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatorioprocessoporobtencao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatorioprocessoporobtencao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
