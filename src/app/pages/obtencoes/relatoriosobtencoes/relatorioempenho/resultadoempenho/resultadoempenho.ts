import { Component, OnInit } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadoempenho',
  imports: [Relatoriocabecalho],
  templateUrl: './resultadoempenho.html',
  styleUrl: './resultadoempenho.css',
})
export class Resultadoempenho implements OnInit {
  subtitulo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subtitulo =
      this.route.snapshot.queryParamMap.get('subtitulo') ?? '';

    console.log(this.subtitulo);
  }
}
