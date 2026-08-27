import { AfterViewInit, Component } from '@angular/core';
import { Relatoriocabecalho } from "../../relatoriocabecalho/relatoriocabecalho";
import { PdfService } from '../../pdf.service';

@Component({
  selector: 'app-resultadoprocessoporfase',
  imports: [Relatoriocabecalho],
  templateUrl: './resultadoprocessoporfase.html',
  styleUrl: './resultadoprocessoporfase.css',
})
export class Resultadoprocessoporfase implements AfterViewInit {

  constructor(private pdf: PdfService) { }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.pdf.open('report');
    // });
  }
  
  linhas = [

    {
      tipo: 'grupo',
      sr: 'SR(01)PA',
      forma: 'Compra e Venda Decreto 433/92'
    },

    {
      tipo: 'item',
      imovel: 'Fazenda Cachoeiro',
      municipio: 'Paragominas',
      processo: '54100.000147/2011-61',
      area: '1.393,0764',
      capacidade: 62,
      valor: '4.653.356,97',
      fase: '1 - Abertura de Processo'
    },

    {
      tipo: 'item',
      imovel: 'Fazenda Independência',
      municipio: 'Paragominas',
      processo: '54100.000087/2011-87',
      area: '1.149,1199',
      capacidade: 38,
      valor: '2.288.999,48',
      fase: '1 - Abertura de Processo'
    },

    {
      tipo: 'total',
      sr: 'TOTAL SR(01)PA',
      imoveis: '2 imóveis',
      processos: '2 processos',
      area: '2.542,1963',
      capacidade: 100,
      valor: '6.942.356,45'
    },

    {
      tipo: 'grupo',
      sr: 'SR(03)PE',
      forma: 'Compra e Venda Decreto 433/92'
    },

    {
      tipo: 'item',
      imovel: 'Engenho Dois Rios, Gleba São Bento',
      municipio: 'Itambé',
      processo: '54000.036158/2023-41',
      area: '341,1496',
      capacidade: 40,
      valor: '8.094.714,41',
      fase: '2 - Análise Preliminar de Processo'
    },

    {
      tipo: 'item',
      imovel: 'Engenho Pantorra',
      municipio: 'Cabo de Santo Agostinho',
      processo: '54000.057906/2018-62',
      area: '0,0000',
      capacidade: 83,
      valor: '0,00',
      fase: '4 - Vistoria de campo'
    },

    {
      tipo: 'total',
      sr: 'TOTAL SR(03)PE',
      imoveis: '2 imóveis',
      processos: '2 processos',
      area: '341,1496',
      capacidade: 123,
      valor: '8.094.714,41'
    },

    {
      tipo: 'grupo',
      sr: 'SR(01)PA',
      forma: 'Desapropriação Lei 4.132/62'
    },

    {
      tipo: 'item',
      imovel: 'Fazenda Campo de Boi',
      municipio: 'Ipixuna do Pará',
      processo: '54000.074887/2025-68',
      area: '19.516,9890',
      capacidade: 600,
      valor: '156.128.000,00',
      fase: '1 - Abertura de Processo'
    },

    {
      tipo: 'total',
      sr: 'TOTAL SR(01)PA',
      imoveis: '1 imóvel',
      processos: '1 processo',
      area: '19.516,9890',
      capacidade: 600,
      valor: '156.128.000,00'
    },

    {
      tipo: 'grupo',
      sr: 'SR(02)CE',
      forma: 'Desapropriação Lei 8.629/93'
    },

    {
      tipo: 'item',
      imovel: 'Fazenda Caraúbas',
      municipio: 'Santa Quitéria',
      processo: '54000.077102/2023-47',
      area: '3.130,9199',
      capacidade: 48,
      valor: '5.308.554,32',
      fase: '1 - Abertura de Processo'
    },

    {
      tipo: 'item',
      imovel: 'Fazenda Jurema',
      municipio: 'Canindé',
      processo: '54000.024969/2024-81',
      area: '0,0000',
      capacidade: 18,
      valor: '0,00',
      fase: '1 - Abertura de Processo'
    },

    {
      tipo: 'total',
      sr: 'TOTAL SR(02)CE',
      imoveis: '2 imóveis',
      processos: '2 processos',
      area: '3.130,9199',
      capacidade: 66,
      valor: '5.308.554,32'
    },

    {
      tipo: 'grupo',
      sr: 'SR(03)PE',
      forma: 'Desapropriação Lei 8.629/93'
    },

    {
      tipo: 'item',
      imovel: 'Fazendas São Francisco, Sítio Chicão, Sítio Dois Riachos e Outros',
      municipio: 'Riacho das Almas',
      processo: '54140.003567/2007-47',
      area: '1.193,3500',
      capacidade: 53,
      valor: '6.687.625,39',
      fase: '2 - Análise Preliminar de Processo'
    },

    {
      tipo: 'total',
      sr: 'TOTAL SR(03)PE',
      imoveis: '1 imóvel',
      processos: '1 processo',
      area: '1.193,3500',
      capacidade: 53,
      valor: '6.687.625,39'
    },

    {
      tipo: 'geral',
      sr: 'TOTAL GERAL',
      imoveis: '8 imóveis',
      processos: '8 processos',
      area: '26.724,6048',
      capacidade: 942,
      valor: '183.161.250,57'
    }

  ];
}
