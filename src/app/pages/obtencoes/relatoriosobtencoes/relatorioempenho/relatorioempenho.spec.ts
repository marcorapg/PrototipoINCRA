import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorioempenho } from './relatorioempenho';

describe('Relatorioempenho', () => {
  let component: Relatorioempenho;
  let fixture: ComponentFixture<Relatorioempenho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatorioempenho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatorioempenho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
