import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrButton, BrDatetimePicker, BrInput, BrSelect, BrTag } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { ActionMenu, MenuAction } from '../../../../componentes/actionmenu/actionmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meusprocessos',
  imports: [BrButton, BrInput, BrSelect, BrTag, BrDatetimePicker, Breadcrumb, RouterLink, CommonModule, ActionMenu],
  templateUrl: './meusprocessos.html',
  styleUrl: './meusprocessos.css',
})
export class Meusprocessos {
  controleProcessos = [
    {
      superintendencia: 'SR(06)MG',
      nomeImovel: 'Fazendo Surubin',
      processo: '12354.974564/2026-01',
      faseProcesso: 'Análise Inicial',
      situacao: 'Em andamento',
      prazo: '21/07/2026'
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

    let hash = 0;

    for (let i = 0; i < status.length; i++) {
      hash = status.charCodeAt(i) * 3 + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;

    return colors[index];
  }

  controleProcessosActions: MenuAction[] = [
    {
      label: 'Visualizar Processo',
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
}
