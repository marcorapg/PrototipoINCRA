import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controleprocessos } from './controleprocessos';

describe('Controleprocessos', () => {
  let component: Controleprocessos;
  let fixture: ComponentFixture<Controleprocessos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controleprocessos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Controleprocessos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
