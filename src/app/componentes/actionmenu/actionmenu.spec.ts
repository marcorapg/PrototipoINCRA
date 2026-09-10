import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actionmenu } from './actionmenu';

describe('Actionmenu', () => {
  let component: Actionmenu;
  let fixture: ComponentFixture<Actionmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actionmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actionmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
