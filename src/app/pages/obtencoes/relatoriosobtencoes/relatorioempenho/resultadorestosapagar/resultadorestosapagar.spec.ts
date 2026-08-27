import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadorestosapagar } from './resultadorestosapagar';

describe('Resultadorestosapagar', () => {
  let component: Resultadorestosapagar;
  let fixture: ComponentFixture<Resultadorestosapagar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadorestosapagar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadorestosapagar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
