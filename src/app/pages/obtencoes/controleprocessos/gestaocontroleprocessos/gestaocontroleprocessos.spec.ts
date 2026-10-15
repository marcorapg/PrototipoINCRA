import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaocontroleprocessos } from './gestaocontroleprocessos';

describe('Gestaocontroleprocessos', () => {
  let component: Gestaocontroleprocessos;
  let fixture: ComponentFixture<Gestaocontroleprocessos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaocontroleprocessos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaocontroleprocessos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
