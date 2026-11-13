import { Component, OnInit } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadorestosapagar',
  imports: [Relatoriocabecalho],
  templateUrl: './resultadorestosapagar.html',
  styleUrl: './resultadorestosapagar.css',
})
export class Resultadorestosapagar implements OnInit {
  subtitulo = '';
  exibirPOFontes:boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subtitulo =
      this.route.snapshot.queryParamMap.get('subtitulo') ?? '';

    this.exibirPOFontes =
      (this.route.snapshot.queryParamMap.get('incluirPOFontes') ?? '') == 'true';
  }
}
