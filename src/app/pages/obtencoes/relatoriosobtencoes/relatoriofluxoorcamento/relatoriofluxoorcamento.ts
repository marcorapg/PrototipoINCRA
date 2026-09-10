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

  incluirPrevistos: boolean = false;
  subtituloRelatorio: string = '';
  tipoRelatorio: string = 'sintetico';

  onSubtituloChange(event: Event): void {
    this.subtituloRelatorio = (event.target as HTMLInputElement).value;
  }

  alterarTipoRelatorio(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.tipoRelatorio = select.value;
  }

  gerarRelatorio() {
    var rota;

    if(this.tipoRelatorio == 'sintetico') rota = 'obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamento';
    else rota = 'obtencoes/relatoriosobtencoes/relatoriofluxoorcamento/resultadofluxoorcamentoanalitico';

    const url = new URL(rota, document.baseURI);

    url.searchParams.set('incluirPrevistos', String(this.incluirPrevistos));
    url.searchParams.set('subtitulo', this.subtituloRelatorio);

    window.open(
      url.toString(),
      'Fluxo de Orçamento',
      'width=1200,height=800,left=100,top=100'
    );
  }

}
