import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lafgerado } from './lafgerado';

describe('Lafgerado', () => {
  let component: Lafgerado;
  let fixture: ComponentFixture<Lafgerado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lafgerado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lafgerado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
