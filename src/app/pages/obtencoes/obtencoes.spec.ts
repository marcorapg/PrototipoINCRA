import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obtencoes } from './obtencoes';

describe('Obtencoes', () => {
  let component: Obtencoes;
  let fixture: ComponentFixture<Obtencoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obtencoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obtencoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
