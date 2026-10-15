import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvagerado } from './lvagerado';

describe('Lvagerado', () => {
  let component: Lvagerado;
  let fixture: ComponentFixture<Lvagerado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lvagerado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lvagerado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
