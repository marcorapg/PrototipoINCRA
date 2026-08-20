import { AfterViewInit, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatoriocabecalho',
  imports: [CommonModule],
  templateUrl: './relatoriocabecalho.html',
  styleUrl: './relatoriocabecalho.css',
})

export class Relatoriocabecalho implements AfterViewInit {
  titulo = input.required<string>();
  subtitulo = input<string>();

  ngAfterViewInit(): void {
    console.log(this.subtitulo());
  }
}
