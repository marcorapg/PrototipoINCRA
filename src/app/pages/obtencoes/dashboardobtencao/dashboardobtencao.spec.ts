import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardobtencao } from './dashboardobtencao';

describe('Dashboardobtencao', () => {
  let component: Dashboardobtencao;
  let fixture: ComponentFixture<Dashboardobtencao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardobtencao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardobtencao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
