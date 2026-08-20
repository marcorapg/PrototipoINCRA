import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatoriosobtencoes } from './relatoriosobtencoes';

describe('Relatoriosobtencoes', () => {
  let component: Relatoriosobtencoes;
  let fixture: ComponentFixture<Relatoriosobtencoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatoriosobtencoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatoriosobtencoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
