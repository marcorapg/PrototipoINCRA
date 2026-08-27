import { Component, OnInit } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { ActivatedRoute } from '@angular/router';
import { BrDivider } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-resultadofluxoorcamentoanalitico',
  imports: [Relatoriocabecalho, BrDivider],
  templateUrl: './resultadofluxoorcamentoanalitico.html',
  styleUrl: './resultadofluxoorcamentoanalitico.css',
})
export class Resultadofluxoorcamentoanalitico implements OnInit {

  incluirPrevistos: boolean = false;
  subtitulo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.incluirPrevistos =
      this.route.snapshot.queryParamMap.get('incluirPrevistos') == 'true';

      this.subtitulo =this.route.snapshot.queryParamMap.get('subtitulo') ?? '';
  }
  
}