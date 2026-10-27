import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laf } from './laf';

describe('Laf', () => {
  let component: Laf;
  let fixture: ComponentFixture<Laf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
