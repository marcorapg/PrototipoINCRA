import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorioprocessoporfase } from './relatorioprocessoporfase';

describe('Relatorioprocessoporfase', () => {
  let component: Relatorioprocessoporfase;
  let fixture: ComponentFixture<Relatorioprocessoporfase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatorioprocessoporfase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatorioprocessoporfase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
