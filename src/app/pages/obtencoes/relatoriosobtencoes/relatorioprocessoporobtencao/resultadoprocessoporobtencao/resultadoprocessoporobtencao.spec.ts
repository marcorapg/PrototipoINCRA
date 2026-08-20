import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultadoprocessoporobtencao } from './resultadoprocessoporobtencao';

describe('Resultadoprocessoporobtencao', () => {
  let component: Resultadoprocessoporobtencao;
  let fixture: ComponentFixture<Resultadoprocessoporobtencao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultadoprocessoporobtencao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultadoprocessoporobtencao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
