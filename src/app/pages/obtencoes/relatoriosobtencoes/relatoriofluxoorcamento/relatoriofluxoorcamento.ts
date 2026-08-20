import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrButton, BrCheckbox, BrInput, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-relatoriofluxoorcamento',
  imports: [RouterLink, BrButton, BrSelect, BrInput, BrCheckbox, Breadcrumb],
  templateUrl: './relatoriofluxoorcamento.html',
  styleUrl: './relatoriofluxoorcamento.css',
})
export class Relatoriofluxoorcamento {

  incluirPrevistos : boolean = false;
  subtituloRelatorio: string = '';

  onSubtituloChange(event: Event): void {
    this.subtituloRelatorio = (event.target as HTMLInputElement).value;
  }

  gerarRelatorio() {
    const rota = '/obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamento';

    const url = `${rota}?incluirPrevistos=${encodeURIComponent(this.incluirPrevistos)}&subtitulo=${encodeURIComponent(this.subtituloRelatorio)}`;

    window.open(
      url,
      'Fluxo de Orçamento',
      'width=1200,height=800,left=100,top=100'
    );
  }

}
