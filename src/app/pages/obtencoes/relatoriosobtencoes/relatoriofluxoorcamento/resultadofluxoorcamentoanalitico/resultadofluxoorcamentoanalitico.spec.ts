import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadofluxoorcamentoanalitico } from './resultadofluxoorcamentoanalitico';

describe('Resultadofluxoorcamentoanalitico', () => {
  let component: Resultadofluxoorcamentoanalitico;
  let fixture: ComponentFixture<Resultadofluxoorcamentoanalitico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadofluxoorcamentoanalitico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadofluxoorcamentoanalitico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
