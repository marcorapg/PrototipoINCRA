import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvaanexos } from './lvaanexos';

describe('Lvaanexos', () => {
  let component: Lvaanexos;
  let fixture: ComponentFixture<Lvaanexos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lvaanexos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lvaanexos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
