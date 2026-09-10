import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ofertaimovel } from './ofertaimovel';

describe('Ofertaimovel', () => {
  let component: Ofertaimovel;
  let fixture: ComponentFixture<Ofertaimovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ofertaimovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ofertaimovel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
