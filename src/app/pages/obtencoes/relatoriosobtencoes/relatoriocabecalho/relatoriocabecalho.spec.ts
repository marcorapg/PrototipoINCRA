import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatoriocabecalho } from './relatoriocabecalho';

describe('Relatoriocabecalho', () => {
  let component: Relatoriocabecalho;
  let fixture: ComponentFixture<Relatoriocabecalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatoriocabecalho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatoriocabecalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
