import { Component } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadoorcamentocompensacao',
  imports: [Relatoriocabecalho],
  templateUrl: './resultadoorcamentocompensacao.html',
  styleUrl: './resultadoorcamentocompensacao.css',
})
export class Resultadoorcamentocompensacao {
  subtitulo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subtitulo =
      this.route.snapshot.queryParamMap.get('subtitulo') ?? '';

    console.log(this.subtitulo);
  }
}
