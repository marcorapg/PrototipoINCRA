import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lva } from './lva';

describe('Lva', () => {
  let component: Lva;
  let fixture: ComponentFixture<Lva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
