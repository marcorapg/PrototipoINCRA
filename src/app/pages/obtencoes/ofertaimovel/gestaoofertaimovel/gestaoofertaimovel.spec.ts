import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestaoofertaimovel } from './gestaoofertaimovel';

describe('Gestaoofertaimovel', () => {
  let component: Gestaoofertaimovel;
  let fixture: ComponentFixture<Gestaoofertaimovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestaoofertaimovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestaoofertaimovel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
