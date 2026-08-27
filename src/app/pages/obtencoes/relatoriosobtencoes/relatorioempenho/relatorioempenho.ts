import { Component } from '@angular/core';
import { BrButton, BrInput, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorioempenho',
  imports: [BrButton, BrInput, BrSelect, Breadcrumb, RouterLink, CommonModule],
  templateUrl: './relatorioempenho.html',
  styleUrl: './relatorioempenho.css'
})
export class Relatorioempenho {

  subtituloRelatorio: string = '';
  tipoRelatorio: string = '1';

  alterarTipoRelatorio(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.tipoRelatorio = select.value;
  }

  onSubtituloChange(event: Event): void {
  this.subtituloRelatorio = (event.target as HTMLInputElement).value;
}

  gerarRelatorio() {
    const rotas: { [key: string]: string } = {
      '1': 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoempenho',
      '2': 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadorestosapagar',
      '3': 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentoadjudicacao',
      '4': 'obtencoes/relatoriosobtencoes/relatorioempenho/resultadoorcamentocompensacao'
    };

    const rota = rotas[this.tipoRelatorio];

    if (!rota) {
      return;
    }

    const url = `${rota}?subtitulo=${encodeURIComponent(this.subtituloRelatorio)}`;

    console.log(url);
    window.open(
      url,
      'Fluxo de Orçamento',
      'width=1200,height=800,left=100,top=100'
    );
  }
}
