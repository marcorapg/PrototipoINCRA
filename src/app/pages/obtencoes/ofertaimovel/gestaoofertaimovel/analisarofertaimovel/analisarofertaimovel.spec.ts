import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analisarofertaimovel } from './analisarofertaimovel';

describe('Analisarofertaimovel', () => {
  let component: Analisarofertaimovel;
  let fixture: ComponentFixture<Analisarofertaimovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analisarofertaimovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Analisarofertaimovel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
