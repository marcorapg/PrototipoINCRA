import { Component } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadoorcamentoadjudicacao',
  imports: [Relatoriocabecalho],
  templateUrl: './resultadoorcamentoadjudicacao.html',
  styleUrl: './resultadoorcamentoadjudicacao.css',
})
export class Resultadoorcamentoadjudicacao {
  subtitulo = '';
  exibirPOFontes: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subtitulo =
      this.route.snapshot.queryParamMap.get('subtitulo') ?? '';

    this.exibirPOFontes =
      (this.route.snapshot.queryParamMap.get('incluirPOFontes') ?? '') == 'true';
  }
}
