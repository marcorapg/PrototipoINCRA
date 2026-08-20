import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Relatoriocabecalho } from '../../relatoriocabecalho/relatoriocabecalho';
import { PdfService } from '../../pdf.service';
import { BrDivider } from '@govbr-ds/webcomponents-angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadofluxoorcamento',
  imports: [Relatoriocabecalho, BrDivider],
  templateUrl: './resultadofluxoorcamento.html',
  styleUrl: './resultadofluxoorcamento.css',
})
export class Resultadofluxoorcamento implements OnInit {

  incluirPrevistos: boolean = false;
  subtitulo: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.incluirPrevistos =
      this.route.snapshot.queryParamMap.get('incluirPrevistos') == 'true';

      this.subtitulo =this.route.snapshot.queryParamMap.get('subtitulo') ?? '';
  }

  // constructor(private pdf: PdfService) { }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.pdf.open('report', 'landscape');
  //   });
  // }

}