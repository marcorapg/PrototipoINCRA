import { Component } from '@angular/core';
import { BrButton, BrIcon, BrInput, BrSelect, BrTag } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActionMenu, MenuAction } from '../../../../componentes/actionmenu/actionmenu';

@Component({
  selector: 'app-gestaoofertaimovel',
  imports: [BrButton, BrInput, BrSelect, BrTag, Breadcrumb, RouterLink, CommonModule, ActionMenu],
  templateUrl: './gestaoofertaimovel.html',
  styleUrl: './gestaoofertaimovel.css',
})
export class Gestaoofertaimovel {
  ofertas = [
    {
      nomeImovel: 'Fazenda Surubin',
      estado: 'MG',
      municipio: 'Araxá',
      superintendencia: 'SR(06)MG',
      tipoOferta: 'Leilão',
      area: '150 ha',
      valor: 'R$ 12.000.000,00',
      situacao: 'Em análise'
    },
    {
      nomeImovel: 'Fazenda São Carlos',
      estado: 'SP',
      municipio: 'Osasco',
      superintendencia: 'SR(08)MG',
      tipoOferta: 'Venda',
      area: '121 ha',
      valor: 'R$ 33.000.000,00',
      situacao: 'Rejeitado'
    },
    {
      nomeImovel: 'Fazenda Curumim',
      estado: 'PA',
      municipio: 'Ananindeua',
      superintendencia: 'SR(01)MG',
      tipoOferta: 'Doação',
      area: '99 ha',
      valor: 'R$ 7.000.000,00',
      situacao: 'Em análise'
    },
    {
      nomeImovel: 'Fazenda João Bento',
      estado: 'MG',
      municipio: 'Bom Despacho',
      superintendencia: 'SR(01)MG',
      tipoOferta: 'Venda',
      area: '157 ha',
      valor: 'R$ 11.000.000,00',
      situacao: 'Concluída'
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

  ofertaActions: MenuAction[] = [
    {
      label: 'Analisar oferta',
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
