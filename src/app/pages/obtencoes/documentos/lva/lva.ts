import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Router, RouterLink } from '@angular/router';
import { BrInput, BrDatetimePicker, BrTextarea, BrUpload, BrTable, BrTableRow, BrTableHeaderCell, BrTableCell, BrTableHeaderRow, BrButton, BrIcon, BrTooltip, BrTab, BrTabItem, BrSelect, BrRadio, BrScrim, BrModal, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

interface ImovelRegistro {
  area: string;
  formaObtencao: string;
  registro: string;
  livro: string;
  comarca: string;
  oficio: string;
  dataRegistro: string;
}

interface UsoImovel {
  uso: string;
  area: number;
}

interface InventarioBenfeitoria {
  numero: string;
  tipo: string;
  descricao: string;
  unidadeMedida: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  depreciacao: string;
  valorFinal: number;
}

interface ElementoAmostra {
  contador: number;
  elemento: string;
  area: number;
  vtn: number;
  vti: number;
  vtnh: number;
  notaAgronomica: string;
  fatorArea: number;
  fator3: number;
  fator4: number;
  fht: number;
  vtnha: number;
  saneamento: number;
}

@Component({
  selector: 'app-lva',
  imports: [Breadcrumb, BrInput, BrDatetimePicker, BrTextarea, BrUpload, BrTable, BrTableRow, BrSelect, BrRadio, BrScrim, BrModal, BrMessage,
    BrTableHeaderCell, BrTableCell, BrTableHeaderRow, BrButton, BrIcon, BrTab, BrTabItem, CommonModule, RouterLink, QuillModule],
  templateUrl: './lva.html',
  styleUrl: './lva.css',
})
export class Lva {
  constructor(private router: Router) { }

  proximaAba() {
    const tab = document.getElementById('tabLVA') as any;

    const itens = Array.from(
      tab.querySelectorAll('br-tab-item')
    ) as any[];

    const indiceAtual = itens.findIndex(
      item => item.isActive === true ||
        item.getAttribute('is-active') === 'true'
    );

    if (indiceAtual >= 0 && indiceAtual < itens.length - 1) {
      const proximaAba = itens[indiceAtual + 1];
      const id = proximaAba.getAttribute('tab-item-id');

      // Atualiza a aba ativa no componente pai
      tab.activeTabId = id;

      // Atualiza isActive em todos os itens
      itens.forEach((item, index) => {
        item.isActive = index === indiceAtual + 1;
      });
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  registros: ImovelRegistro[] = [
    {
      area: '',
      formaObtencao: '',
      registro: '',
      livro: '',
      comarca: '',
      oficio: '',
      dataRegistro: ''
    }
  ];

  adicionarRegistro(): void {
    this.registros.push({
      area: '',
      formaObtencao: '',
      registro: '',
      livro: '',
      comarca: '',
      oficio: '',
      dataRegistro: ''
    });
  }

  removerRegistro(index: number): void {
    this.registros.splice(index, 1);
  }

  // Uso do imóvel
  getOpcoesUsoImovel(usoSelecionado: string) {
    return JSON.stringify([
      { label: 'Açudes/Lâmina dÁgua', value: '1', selected: usoSelecionado === '1' },
      { label: 'Rios/Córregos', value: '2', selected: usoSelecionado === '2' },
      { label: 'Nascentes', value: '3', selected: usoSelecionado === '3' },
      { label: 'Lagoas', value: '4', selected: usoSelecionado === '4' },
      { label: 'Banhado/Várzea', value: '5', selected: usoSelecionado === '5' },
      { label: 'APP Preservada', value: '6', selected: usoSelecionado === '6' },
      { label: 'APP Degradada', value: '7', selected: usoSelecionado === '7' },
      { label: 'Reserva Legal', value: '8', selected: usoSelecionado === '8' },
      { label: 'Vegetação Nativa', value: '9', selected: usoSelecionado === '9' },
      { label: 'Vegetação Nativa em Estágio Inicial', value: '10', selected: usoSelecionado === '10' },
      { label: 'Vegetação Nativa em Estágio Médio', value: '11', selected: usoSelecionado === '11' },
      { label: 'Vegetação Nativa em Estágio Avançado', value: '12', selected: usoSelecionado === '12' },
      { label: 'Agricultura', value: '13', selected: usoSelecionado === '13' },
      { label: 'Pastagem', value: '14', selected: usoSelecionado === '14' },
      { label: 'Silvicultura/Reflorestamento', value: '15', selected: usoSelecionado === '15' },
      { label: 'Culturas Permanentes', value: '16', selected: usoSelecionado === '16' },
      { label: 'Culturas Temporárias', value: '17', selected: usoSelecionado === '17' },
      { label: 'Área de Pousio', value: '18', selected: usoSelecionado === '18' },
      { label: 'Benfeitorias/Sede', value: '19', selected: usoSelecionado === '19' },
      { label: 'Estradas', value: '20', selected: usoSelecionado === '20' },
      { label: 'Carreadores', value: '21', selected: usoSelecionado === '21' },
      { label: 'Currais/Instalações Pecuárias', value: '22', selected: usoSelecionado === '22' },
      { label: 'Galpões/Armazéns', value: '23', selected: usoSelecionado === '23' },
      { label: 'Sistemas de Irrigação', value: '24', selected: usoSelecionado === '24' },
      { label: 'Área Abandonada', value: '25', selected: usoSelecionado === '25' },
      { label: 'Área Improdutiva', value: '26', selected: usoSelecionado === '26' },
      { label: 'Solo Exposto', value: '27', selected: usoSelecionado === '27' },
      { label: 'Área Degradada', value: '28', selected: usoSelecionado === '28' },
      { label: 'Área com Erosão', value: '29', selected: usoSelecionado === '29' },
      { label: 'Área com Assoreamento', value: '30', selected: usoSelecionado === '30' },
      { label: 'Área com Supressão Irregular', value: '31', selected: usoSelecionado === '31' },
      { label: 'Área de APP a Recuperar', value: '32', selected: usoSelecionado === '32' },
      { label: 'Área de Reserva Legal a Recuperar', value: '33', selected: usoSelecionado === '33' },
      { label: 'Área Contaminada', value: '34', selected: usoSelecionado === '34' }
    ]);
  }

  listaUsoImovel: UsoImovel[] = [
    {
      uso: '1',
      area: 300
    },
    {
      uso: '26',
      area: 750
    },
    {
      uso: '8',
      area: 450
    }
  ];

  //1.2 Localizacao
  tipoSituacaoLocalizacao: string = '';

  adicionarUsoImovel(): void {
    this.listaUsoImovel.push({
      uso: '',
      area: 0
    });
  }

  removerUsoImovel(index: number): void {
    this.listaUsoImovel.splice(index, 1);
  }

  fertilidadeNatural: string = '';
  classeFertilidadeNatural: string = '';
  alterarFertilidadeNatural(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.fertilidadeNatural = select.value;
    //Muito Alta, Alta, Média, Baixa, Muito Baixa
    //I, I, II, III, IV
    switch (this.fertilidadeNatural) {
      case 'Muito Alta':
      case 'Alta':
        this.classeFertilidadeNatural = 'I';
        break;

      case 'Média':
        this.classeFertilidadeNatural = 'II';
        break;

      case 'Baixa':
        this.classeFertilidadeNatural = 'III';
        break;

      case 'Muito Baixa':
        this.classeFertilidadeNatural = 'IV';
        break;
    }
  }

  profundidadeSolo: string = '';
  classeProfundidadeSolo: string = '';

  alterarProfundidadeSolo(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.profundidadeSolo = select.value;

    // Muito Profunda, Profunda, Pouco profundo, Rasa, Muito rasa
    // I,              I,        II,             IV,   VII

    switch (this.profundidadeSolo) {
      case 'Muito Profunda':
      case 'Profunda':
        this.classeProfundidadeSolo = 'I';
        break;

      case 'Pouco profundo':
        this.classeProfundidadeSolo = 'II';
        break;

      case 'Rasa':
        this.classeProfundidadeSolo = 'IV';
        break;

      case 'Muito rasa':
        this.classeProfundidadeSolo = 'VII';
        break;
    }
  }

  drenagemInterna: string = '';
  classeDrenagemInterna: string = '';

  alterarDrenagemInterna(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.drenagemInterna = select.value;

    // Excessiva, Forte, Acentuada, Bem Drenado,
    // Moderada, Imperfeita, Mal Drenado, Muito mal drenado
    // II,       II,     II,         I,
    // II,       III,       V,          VIII

    switch (this.drenagemInterna) {
      case 'Excessiva':
      case 'Forte':
      case 'Acentuada':
      case 'Moderada':
        this.classeDrenagemInterna = 'II';
        break;

      case 'Bem Drenado':
        this.classeDrenagemInterna = 'I';
        break;

      case 'Imperfeita':
        this.classeDrenagemInterna = 'III';
        break;

      case 'Mal Drenado':
        this.classeDrenagemInterna = 'V';
        break;

      case 'Muito mal drenado':
        this.classeDrenagemInterna = 'VIII';
        break;
    }
  }

  defluvioSuperficial: string = '';
  classeDefluvioSuperficial: string = '';

  alterarDefluvioSuperficial(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.defluvioSuperficial = select.value;

    // Muito Rápido, Rápido, Moderado, Lento, Muito Lento
    // IV,          III,    II,       I,     II

    switch (this.defluvioSuperficial) {
      case 'Muito Rápido':
        this.classeDefluvioSuperficial = 'IV';
        break;

      case 'Rápido':
        this.classeDefluvioSuperficial = 'III';
        break;

      case 'Moderado':
        this.classeDefluvioSuperficial = 'II';
        break;

      case 'Lento':
        this.classeDefluvioSuperficial = 'I';
        break;

      case 'Muito Lento':
        this.classeDefluvioSuperficial = 'II';
        break;
    }
  }

  pedregosidade: string = '';
  classePedregosidade: string = '';

  alterarPedregosidade(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.pedregosidade = select.value;

    // Sem Pedras, Ligeiramente Pedregoso, Moderadamente Pedregoso,
    // Pedregoso, Muito Pedregoso, Extremamente Pedregoso
    // I,           II,                   III,
    // IV,          VI,                  VII

    switch (this.pedregosidade) {
      case 'Sem Pedras':
        this.classePedregosidade = 'I';
        break;

      case 'Ligeiramente Pedregoso':
        this.classePedregosidade = 'II';
        break;

      case 'Moderadamente Pedregoso':
        this.classePedregosidade = 'III';
        break;

      case 'Pedregoso':
        this.classePedregosidade = 'IV';
        break;

      case 'Muito Pedregoso':
        this.classePedregosidade = 'VI';
        break;

      case 'Extremamente Pedregoso':
        this.classePedregosidade = 'VII';
        break;
    }
  }

  riscosInundacao: string = '';
  classeRiscosInundacao: string = '';

  alterarRiscosInundacao(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.riscosInundacao = select.value;

    // Ocasional, Freqüente, Muito Freqüente
    // III,       V,         VIII

    switch (this.riscosInundacao) {
      case 'Ocasional':
        this.classeRiscosInundacao = 'III';
        break;

      case 'Freqüente':
        this.classeRiscosInundacao = 'V';
        break;

      case 'Muito Freqüente':
        this.classeRiscosInundacao = 'VIII';
        break;
    }
  }

  classeDeclividade: string = '';
  classeClasseDeclividade: string = '';

  alterarClasseDeclividade(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.classeDeclividade = select.value;

    // Plano, Suave ondulado, Moderadamente Ondulado, Ondulado,
    // Forte Ondulado, Montanhoso, Escarpado
    // I,     II,              III,                 IV,
    // VI,    VII,             VIII

    switch (this.classeDeclividade) {
      case 'Plano':
        this.classeClasseDeclividade = 'I';
        break;

      case 'Suave ondulado':
        this.classeClasseDeclividade = 'II';
        break;

      case 'Moderadamente Ondulado':
        this.classeClasseDeclividade = 'III';
        break;

      case 'Ondulado':
        this.classeClasseDeclividade = 'IV';
        break;

      case 'Forte Ondulado':
        this.classeClasseDeclividade = 'VI';
        break;

      case 'Montanhoso':
        this.classeClasseDeclividade = 'VII';
        break;

      case 'Escarpado':
        this.classeClasseDeclividade = 'VIII';
        break;
    }
  }

  grauErosaoLaminar: string = '';
  classeGrauErosaoLaminar: string = '';

  alterarGrauErosaoLaminar(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.grauErosaoLaminar = select.value;

    // Não Aparente, Ligeira, Moderada, Severa, Muito Severa, Extremamente severa
    // I,             II,      III,      VI,     VII,          VIII

    switch (this.grauErosaoLaminar) {
      case 'Não Aparente':
        this.classeGrauErosaoLaminar = 'I';
        break;

      case 'Ligeira':
        this.classeGrauErosaoLaminar = 'II';
        break;

      case 'Moderada':
        this.classeGrauErosaoLaminar = 'III';
        break;

      case 'Severa':
        this.classeGrauErosaoLaminar = 'VI';
        break;

      case 'Muito Severa':
        this.classeGrauErosaoLaminar = 'VII';
        break;

      case 'Extremamente severa':
        this.classeGrauErosaoLaminar = 'VIII';
        break;
    }
  }

  sulcosRasos: string = '';
  classeSulcosRasos: string = '';

  alterarSulcosRasos(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.sulcosRasos = select.value;

    // Ocasionais, Freqüentes, Muito Freqüentes
    // II,         III,       IV

    switch (this.sulcosRasos) {
      case 'Ocasionais':
        this.classeSulcosRasos = 'II';
        break;

      case 'Freqüentes':
        this.classeSulcosRasos = 'III';
        break;

      case 'Muito Freqüentes':
        this.classeSulcosRasos = 'IV';
        break;
    }
  }

  sulcosMedios: string = '';
  classeSulcosMedios: string = '';

  alterarSulcosMedios(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.sulcosMedios = select.value;

    // Ocasionais, Freqüentes, Muito Freqüentes
    // III,        IV,         VI

    switch (this.sulcosMedios) {
      case 'Ocasionais':
        this.classeSulcosMedios = 'III';
        break;

      case 'Freqüentes':
        this.classeSulcosMedios = 'IV';
        break;

      case 'Muito Freqüentes':
        this.classeSulcosMedios = 'VI';
        break;
    }
  }

  sulcosProfundos: string = '';
  classeSulcosProfundos: string = '';

  alterarSulcosProfundos(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.sulcosProfundos = select.value;

    // Ocasionais, Freqüentes, Muito Freqüentes
    // III,        VI,         VII

    switch (this.sulcosProfundos) {
      case 'Ocasionais':
        this.classeSulcosProfundos = 'III';
        break;

      case 'Freqüentes':
        this.classeSulcosProfundos = 'VI';
        break;

      case 'Muito Freqüentes':
        this.classeSulcosProfundos = 'VII';
        break;
    }
  }

  secaEdafologica: string = '';
  classeSecaEdafologica: string = '';

  alterarSecaEdafologica(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.secaEdafologica = select.value;

    // Ligeira, Curta, Média, Longa, Muito longa
    // II,      III,   IV,    VI,    VII

    switch (this.secaEdafologica) {
      case 'Ligeira':
        this.classeSecaEdafologica = 'II';
        break;

      case 'Curta':
        this.classeSecaEdafologica = 'III';
        break;

      case 'Média':
        this.classeSecaEdafologica = 'IV';
        break;

      case 'Longa':
        this.classeSecaEdafologica = 'VI';
        break;

      case 'Muito longa':
        this.classeSecaEdafologica = 'VII';
        break;
    }
  }

  areaTotal: number = 1500;
  classe1: number = 0;
  classe2: number = 0;
  classe3: number = 0;
  classe4: number = 0;
  classe5: number = 0;
  classe6: number = 0;
  classe7: number = 0;
  classe8: number = 0;
  somatorioAreaAproximada: number = 0;
  somatorioPercentualArea: number = 0;

  //Nota agronômica
  notaAgronomica: number = 7.3;
  localizacaoTerreno: string = '';
  alterarLocalizacaoTerreno(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.localizacaoTerreno = select.value;
  }

  areaClasses: number[] = Array(8).fill(0);

  getNomeClasse(numeroClasse: number): string {
    const classes: string[] = [
      "Classe I",
      "Classe II",
      "Classe III",
      "Classe IV",
      "Classe V",
      "Classe VI",
      "Classe VII",
      "Classe VIII"
    ];

    return classes[numeroClasse - 1] ?? "";
  }

  classesUsoDiscriminacao: string[] = [
    "Lavoura sem restrições",
    "Lavoura com práticas simples",
    "Lavoura com práticas intensas",
    "Lavoura esporádica e pastos",
    "Pastagens com restrições",
    "Pastagens com práticas simples",
    "Áreas de uso restrito (florestas, solos extremamente pedregoso/muito raso, relevo montanhoso)",
    "Abrigo da vida silvestre (APP), áreas muito mal drenadas ou com relevo escarpado"
  ];

  getFatorUso(localizacao: string, classe: number): number {
    if (!localizacao || localizacao.trim() === '') {
      return 0;
    }

    const tabela: Record<string, number[]> = {
      "Ótima": [1.000, 0.800, 0.610, 0.470, 0.390, 0.290, 0.200, 0.130],
      "Muito Boa": [0.950, 0.760, 0.580, 0.447, 0.371, 0.276, 0.190, 0.124],
      "Boa": [0.900, 0.720, 0.549, 0.423, 0.351, 0.261, 0.180, 0.117],
      "Regular": [0.800, 0.640, 0.488, 0.376, 0.312, 0.232, 0.160, 0.104],
      "Desfavorável": [0.750, 0.600, 0.458, 0.353, 0.293, 0.218, 0.150, 0.098],
      "Má": [0.700, 0.560, 0.427, 0.329, 0.273, 0.203, 0.140, 0.091]
    };

    return tabela[localizacao]?.[classe] ?? 0;
  }

  calcularSomaAreaIndice(localizacao: string): number {
    let resultado = 0;

    for (let i = 0; i < 8; i++) {
      const area = this.areaClasses[i];
      const indice = this.getFatorUso(localizacao, i);

      resultado += area / 100 * indice;
    }

    return resultado;
  }

  //Inventário de benfeitorias
  inventarioBenfeitorias: InventarioBenfeitoria[] = [
    {
      numero: '',
      tipo: '',
      descricao: '',
      unidadeMedida: '',
      quantidade: 0,
      valorUnitario: 0,
      valorTotal: 0,
      depreciacao: '',
      valorFinal: 0
    }
  ];

  adicionarInventarioBenfeitorias(): void {
    console.log(this.inventarioBenfeitorias);
    this.inventarioBenfeitorias.push({
      numero: '',
      tipo: '',
      descricao: '',
      unidadeMedida: '',
      quantidade: 0,
      valorUnitario: 0,
      valorTotal: 0,
      depreciacao: '',
      valorFinal: 0
    });
  }

  removerInventarioBenfeitorias(index: number): void {
    this.inventarioBenfeitorias.splice(index, 1);
  }

  //3.2 Calculo capacidade familias
  tipoCalculoCapacidadeFamilias: string = '';

  notaAgronomicaCapacidadeFamilias: number = 0;
  areaReservaLegal: number = 0;
  reservaLegalCapacidadeFamilias: number = this.areaTotal * 0.2;

  valorSalarioMinimo: number = 1621;

  areaReservaLegalPorClasseI: number = 0;
  areaReservaLegalPorClasseII: number = 0;
  areaReservaLegalPorClasseIII: number = 0;
  areaReservaLegalPorClasseIV: number = 0;
  areaReservaLegalPorClasseV: number = 0;
  areaReservaLegalPorClasseVI: number = 0;
  areaReservaLegalPorClasseVII: number = 0;
  areaReservaLegalPorClasseVIII: number = 0;

  areaCalculadaPorClasseI: number = 0;
  areaCalculadaPorClasseII: number = 0;
  areaCalculadaPorClasseIII: number = 0;
  areaCalculadaPorClasseIV: number = 0;
  areaCalculadaPorClasseV: number = 0;
  areaCalculadaPorClasseVI: number = 0;
  areaCalculadaPorClasseVII: number = 0;
  areaCalculadaPorClasseVIII: number = 0;

  rendaPorClasseI: number = 0;
  rendaPorClasseII: number = 0;
  rendaPorClasseIII: number = 0;
  rendaPorClasseIV: number = 0;
  rendaPorClasseV: number = 0;
  rendaPorClasseVI: number = 0;
  rendaPorClasseVII: number = 0;
  rendaPorClasseVIII: number = 0;

  rendaLiquidaPorClasseI: number = 0;
  rendaLiquidaPorClasseII: number = 0;
  rendaLiquidaPorClasseIII: number = 0;
  rendaLiquidaPorClasseIV: number = 0;
  rendaLiquidaPorClasseV: number = 0;
  rendaLiquidaPorClasseVI: number = 0;
  rendaLiquidaPorClasseVII: number = 0;
  rendaLiquidaPorClasseVIII: number = 0;

  capacidadeFamiliasRendaSolo: number = 0;

  cacularTabelaCapacidadeFamilias(): void {
    this.areaCalculadaPorClasseI = 100 - this.areaReservaLegalPorClasseI;
    this.areaCalculadaPorClasseII = 200 - this.areaReservaLegalPorClasseII;
    this.areaCalculadaPorClasseIII = 300 - this.areaReservaLegalPorClasseIII;
    this.areaCalculadaPorClasseIV = 100 - this.areaReservaLegalPorClasseIV;
    this.areaCalculadaPorClasseV = 150 - this.areaReservaLegalPorClasseV;
    this.areaCalculadaPorClasseVI = 150 - this.areaReservaLegalPorClasseVI;
    this.areaCalculadaPorClasseVII = 500 - this.areaReservaLegalPorClasseVII;
    this.areaCalculadaPorClasseVIII = 0 - this.areaReservaLegalPorClasseVIII;

    this.rendaPorClasseI = 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseII = 0.8 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseIII = 0.61 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseIV = 0.47 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseV = 0.39 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseVI = 0.29 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseVII = 0.2 * 2.3 * this.valorSalarioMinimo;
    this.rendaPorClasseVIII = 0;

    this.rendaLiquidaPorClasseI = this.areaCalculadaPorClasseI * this.rendaPorClasseI;
    this.rendaLiquidaPorClasseII = this.areaCalculadaPorClasseII * this.rendaPorClasseII;
    this.rendaLiquidaPorClasseIII = this.areaCalculadaPorClasseIII * this.rendaPorClasseIII;
    this.rendaLiquidaPorClasseIV = this.areaCalculadaPorClasseIV * this.rendaPorClasseIV;
    this.rendaLiquidaPorClasseV = this.areaCalculadaPorClasseV * this.rendaPorClasseV;
    this.rendaLiquidaPorClasseVI = this.areaCalculadaPorClasseVI * this.rendaPorClasseVI;
    this.rendaLiquidaPorClasseVII = this.areaCalculadaPorClasseVII * this.rendaPorClasseVII;
    this.rendaLiquidaPorClasseVIII = 0;

    this.capacidadeFamiliasRendaSolo = (this.rendaLiquidaPorClasseI + this.rendaLiquidaPorClasseII + this.rendaLiquidaPorClasseIII + this.rendaLiquidaPorClasseIV + this.rendaLiquidaPorClasseV + this.rendaLiquidaPorClasseVI + this.rendaLiquidaPorClasseVII) / (24 * this.valorSalarioMinimo);
  }

  //3.3 Áreas de Reserva Legal (ARL) e de Preservação Permanente (APP)
  appTotal: number = 0;
  appIndevido: number = 0;

  //Ancianidade das Ocupações
  tempoOcupacao: number = 0;
  percentualAreaOcupada: number = 0;

  //4.1 Fundamentação
  tipoFundamentacao1: boolean = false;
  tipoFundamentacao2: boolean = true;
  tipoFundamentacao3: boolean = false;

  fatorMinimo = 0.70;
  fatorMaximo = 1.40;

  areaMinima = this.areaTotal * this.fatorMinimo;
  areaMaxima = this.areaTotal * this.fatorMaximo;

  // Nota agronômica
  notaAgronomicaMinima = this.notaAgronomica * this.fatorMinimo;
  notaAgronomicaMaxima = this.notaAgronomica * this.fatorMaximo;

  recalcularFundamentacao(): void {

    let fatorMinimo = 0;
    let fatorMaximo = 0;

    if (this.tipoFundamentacao3) {
      // Fundamentação III
      fatorMinimo = 0.80;
      fatorMaximo = 1.25;

    } else if (this.tipoFundamentacao2) {
      // Fundamentação II
      fatorMinimo = 0.70;
      fatorMaximo = 1.40;

    } else if (this.tipoFundamentacao1) {
      // Fundamentação I
      fatorMinimo = 0.50;
      fatorMaximo = 2.00;
    }

    // Área
    this.areaMinima = this.areaTotal * fatorMinimo;
    this.areaMaxima = this.areaTotal * fatorMaximo;

    // Nota agronômica
    this.notaAgronomicaMinima = this.notaAgronomica * fatorMinimo;
    this.notaAgronomicaMaxima = this.notaAgronomica * fatorMaximo;
  }

  //4.2.1. Elementos Amostrais da Pesquisa de Mercado de Terras
  elementos: ElementoAmostra[] = [];
  elementosLista: ElementoAmostra[] = [
    {
      contador: 1,
      elemento: 'Fazenda Surubin',
      area: 125.50,
      vtn: 8500.00,
      vti: 12000.00,
      vtnh: 67.73,
      notaAgronomica: 'Boa',
      fatorArea: 1.10,
      fator3: 0.95,
      fator4: 1.05,
      fht: 1.15,
      vtnha: 7756.00,
      saneamento: 0.90
    },
    {
      contador: 2,
      elemento: 'Fazenda São Jorge',
      area: 85.75,
      vtn: 7200.00,
      vti: 9800.00,
      vtnh: 83.97,
      notaAgronomica: 'Regular',
      fatorArea: 1.05,
      fator3: 1.00,
      fator4: 0.90,
      fht: 1.10,
      vtnha: 7557.00,
      saneamento: 0.85
    },
    {
      contador: 3,
      elemento: 'Fazenda Claros Montes',
      area: 210.30,
      vtn: 5400.00,
      vti: 6800.00,
      vtnh: 25.68,
      notaAgronomica: 'Regular',
      fatorArea: 0.95,
      fator3: 1.10,
      fator4: 1.00,
      fht: 1.05,
      vtnha: 5130.00,
      saneamento: 0.80
    },
    {
      contador: 4,
      elemento: 'Fazenda Belo Monte',
      area: 62.80,
      vtn: 15000.00,
      vti: 18500.00,
      vtnh: 238.85,
      notaAgronomica: 'Excelente',
      fatorArea: 1.20,
      fator3: 0.90,
      fator4: 1.10,
      fht: 1.25,
      vtnha: 18000.00,
      saneamento: 0.95
    },
    {
      contador: 5,
      elemento: 'Fazendo Monte Verde',
      area: 145.20,
      vtn: 9300.00,
      vti: 11500.00,
      vtnh: 64.05,
      notaAgronomica: 'Boa',
      fatorArea: 1.00,
      fator3: 0.98,
      fator4: 1.08,
      fht: 1.12,
      vtnha: 9300.00,
      saneamento: 0.88
    }
  ];

  adicionarElemento(id: number): void {
    const index = this.elementosLista.findIndex(
      elemento => elemento.contador === id
    );

    if (index !== -1) {
      const elemento = this.elementosLista.splice(index, 1)[0];
      this.elementos.push(elemento);
    }
  }

  removerElemento(id: number): void {
    const index = this.elementos.findIndex(
      elemento => elemento.contador === id
    );

    if (index !== -1) {
      const elemento = this.elementos.splice(index, 1)[0];
      this.elementosLista.push(elemento);
    }
  }

  elementoSelecionado: number = 0;
  selecionarElemento(contador: number, checked: boolean): void {
    if (checked)
      this.elementoSelecionado = contador;

    console.log(this.elementoSelecionado);
  }

  abrirModalIncluirElemento() {
    const modal = document.getElementById('incluirElemento') as any;

    modal?.open();
  }

  fecharModalIncluirElemento() {
    const modal = document.getElementById('incluirElemento') as any;

    modal?.close();
  }

  //Anexos
  fotografiasImovel: string[] = [''];
  fotografiasBenfeitorias: string[] = [''];
  fotografiasElementosAmostrais: string[] = [''];

  adicionarAnexo(anexos: string[]): void {
    anexos.push('');
  }

  removerAnexo(anexos: string[], index: number): void {
    anexos.splice(index, 1)[0];
  }
}