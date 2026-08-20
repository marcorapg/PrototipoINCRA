import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadoempenho } from './resultadoempenho';

describe('Resultadoempenho', () => {
  let component: Resultadoempenho;
  let fixture: ComponentFixture<Resultadoempenho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadoempenho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadoempenho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
