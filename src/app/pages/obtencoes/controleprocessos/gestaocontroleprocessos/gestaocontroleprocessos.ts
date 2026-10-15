import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrButton, BrDatetimePicker, BrInput, BrSelect, BrTag, BrCheckbox, BrScrim, BrModal, BrIcon } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { MenuAction } from '../../../../componentes/actionmenu/actionmenu';

@Component({
  selector: 'app-gestaocontroleprocessos',
  imports: [BrButton, BrInput, BrSelect, BrTag, BrDatetimePicker, BrScrim, BrModal, Breadcrumb, RouterLink, CommonModule, BrIcon],
  templateUrl: './gestaocontroleprocessos.html',
  styleUrl: './gestaocontroleprocessos.css',
})
export class Gestaocontroleprocessos {

  controleProcessos = [
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Surubin',
      processo: '12354.974564/2026-01',
      faseProcesso: 'Análise Inicial',
      natureza: 'Pendente',
      atribuicao: '',
      prazo: '21/07/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Boa Esperança',
      processo: '12354.821457/2026-02',
      faseProcesso: 'Abertura',
      natureza: 'Em andamento',
      atribuicao: 'Mariana Oliveira',
      prazo: '25/07/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Santa Helena',
      processo: '12354.763214/2026-03',
      faseProcesso: 'Instrução básica',
      natureza: 'Em andamento',
      atribuicao: 'Carlos Mendes',
      prazo: '30/07/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Vale Verde',
      processo: '12354.695821/2026-04',
      faseProcesso: 'Vistoria e Laudos',
      natureza: 'Pendente',
      atribuicao: '',
      prazo: ''
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Boa Vista',
      processo: '12354.584736/2026-05',
      faseProcesso: 'Consulta de Interesses',
      natureza: 'Em andamento',
      atribuicao: 'João Pereira',
      prazo: '12/08/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda São Miguel',
      processo: '12354.472615/2026-06',
      faseProcesso: 'Cadeia Dominial',
      natureza: 'Pendente',
      atribuicao: '',
      prazo: ''
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Nova Aurora',
      processo: '12354.361824/2026-07',
      faseProcesso: 'Revisões e Deliberações',
      natureza: 'Em andamento',
      atribuicao: 'Ricardo Alves',
      prazo: '22/08/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Serra Azul',
      processo: '12354.258913/2026-08',
      faseProcesso: 'Ato para pagamento',
      natureza: 'Pendente',
      atribuicao: '',
      prazo: '28/08/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Recanto das Águas',
      processo: '12354.147625/2026-09',
      faseProcesso: 'Atos para escrituração',
      natureza: 'Pendente',
      atribuicao: '',
      prazo: '02/09/2026'
    },
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazenda Horizonte',
      processo: '12354.936481/2026-10',
      faseProcesso: 'Destinação do Imóvel',
      natureza: 'Em andamento',
      atribuicao: 'Camila Ferreira',
      prazo: '10/09/2026'
    }
  ];

  getStatusColor(status: string): string {
    const colors = [
      '#539404',
      '#005A9C',
      '#8B4513',
      '#6A1B9A',
      '#00695C',
      '#AD1457',
      '#455A64',
      '#7B1FA2',
      '#1565C0',
      '#2E7D32',
      '#EF6C00',
      '#C62828'
    ];

    if(status == 'Pendente')
      return '#8B4513';

    let hash = 0;

    for (let i = 0; i < status.length; i++) {
      hash = status.charCodeAt(i) * 3 + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;

    return colors[index];
  }

  controleProcessosActions: MenuAction[] = [
    {
      label: 'Visualizar',
      type: 'link',
      url: '/obtencoes/ofertaimovel/gestaoofertaimovel/analisarofertaimovel'
    }
  ];

  onModalAction(action: MenuAction): void {

    if (action.modalId === 'visualizar') {
      // abrir modal de visualização
    }

    if (action.modalId === 'analisar') {
      // abrir modal de análise
    }
  }

  abrirModal() {
    const modal = document.getElementById('basic-modal') as any;

    modal?.open();
  }

  fecharModal() {
    const modal = document.getElementById('basic-modal') as any;

    modal?.close();
  }
}