import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { BrButton, BrInput, BrSelect } from '@govbr-ds/webcomponents-angular/standalone';

@Component({
  selector: 'app-relatorioprocessoporobtencao',
  imports: [RouterLink, Breadcrumb, BrSelect, BrInput, BrButton],
  templateUrl: './relatorioprocessoporobtencao.html',
  styleUrl: './relatorioprocessoporobtencao.css',
})
export class Relatorioprocessoporobtencao {
  gerarRelatorio() {
    window.open(
      'obtencoes/relatoriosobtencoes/relatorioprocessoporobtencao/resultadoprocessoporobtencao',
      'Processos por Forma de Obtenção e Fase Processual',
      'width=1200,height=800,left=100,top=100'
    );
  }

  imoveis = [
    {
      superintendencia: 'SR(01)PA',
      forma: 'Compra e Venda Decreto 433/92',
      grupo: '-',
      processo: '54100.000147/2011-61',
      imovel: 'Fazenda Cachoeiro',
      municipio: 'Paragominas'
    },
    {
      superintendencia: 'SR(01)PA',
      forma: 'Desapropriação Lei 4.132/62',
      grupo: '-',
      processo: '54000.074887/2025-68',
      imovel: 'Fazenda Campo de Boi',
      municipio: 'Ipixuna do Pará'
    },
    {
      superintendencia: 'SR(01)PA',
      forma: 'Compra e Venda Decreto 433/92',
      grupo: '-',
      processo: '54100.000087/2011-87',
      imovel: 'Fazenda Independência',
      municipio: 'Paragominas'
    },
    {
      superintendencia: 'SR(02)CE',
      forma: 'Desapropriação Lei 8.629/93',
      grupo: '-',
      processo: '54000.077102/2023-47',
      imovel: 'Fazenda Caraúbas',
      municipio: 'Santa Quitéria'
    },
    {
      superintendencia: 'SR(02)CE',
      forma: 'Desapropriação Lei 8.629/93',
      grupo: '-',
      processo: '54000.024969/2024-81',
      imovel: 'Fazenda Jurema',
      municipio: 'Canindé'
    },
    {
      superintendencia: 'SR(03)PE',
      forma: 'Compra e Venda Decreto 433/92',
      grupo: '-',
      processo: '54000.036158/2023-41',
      imovel: 'Engenho Dois Rios, Gleba São Bento',
      municipio: 'Itambé'
    },
    {
      superintendencia: 'SR(03)PE',
      forma: 'Compra e Venda Decreto 433/92',
      grupo: '-',
      processo: '54000.057906/2018-62',
      imovel: 'Engenho Pantorra',
      municipio: 'Cabo de Santo Agostinho'
    },
    {
      superintendencia: 'SR(03)PE',
      forma: 'Desapropriação Lei 8.629/93',
      grupo: '-',
      processo: '54140.003567/2007-47',
      imovel: 'Fazendas São Francisco, Sítio Chicão, Sítio Dois Riachos e Outros',
      municipio: 'Riacho das Almas'
    },
    {
      superintendencia: 'SR(04)GO',
      forma: 'Compra e Venda Decreto 433/92',
      grupo: '-',
      processo: '54000.089141/2023-97',
      imovel: 'Fazenda Bacuri e Gaivota - Remanescente',
      municipio: 'Uirapuru'
    },
    {
      superintendencia: 'SR(04)GO',
      forma: 'Desapropriação Lei 8.629/93',
      grupo: '-',
      processo: '54150.002318/2015-25',
      imovel: 'Fazenda Itaipava I e II',
      municipio: 'Jaupaci'
    }
  ];

}