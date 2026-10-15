import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meusprocessos } from './meusprocessos';

describe('Meusprocessos', () => {
  let component: Meusprocessos;
  let fixture: ComponentFixture<Meusprocessos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meusprocessos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meusprocessos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
