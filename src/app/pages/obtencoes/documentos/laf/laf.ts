import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Router, RouterLink } from '@angular/router';
import { BrInput, BrDatetimePicker, BrButton, BrTab, BrTabItem, BrSelect, BrTableCell, BrTableRow, BrTable, BrTableHeaderCell, BrTableHeaderRow, BrIcon, BrUpload, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

interface RegistroSituacaoDominial {
  area: string;
  formaObtencao: string;
  registro: string;
  livro: string;
  comarca: string;
  oficio: string;
  dataRegistro: string;
}

interface RegistroProprietario {
  nome: string;
  detencao: number;
  cpf: string;
  nacionalidade: string;
  endereco: string;
  telefone: string;
  nomeConjuge: string;
  cpfConjuge: string;
}

interface RegistroFloraRegional {
  nomeComum: string;
  nomeCientifico: string;
}

interface RegistroFaunaRegional {
  nomeComum: string;
  nomeCientifico: string;
}

interface RegistroUsoTerra {
  descricao: string;
  unidade: string;
  quantidade: number;
}

interface RegistroAreaProdutoVegetal {
  nomeProduto: string;
  areaPlantada: number;
  areaColhida: number;
  quantidadeColhida: number;
  unidade: string;
  indicadorRestricao: string;
  responsavelExploracao: string;
  rendimento: number;
}

interface RegistroAreaProdutoVegetalConsorcioRotacao {
  nomeProduto: string;
  areaPlantada: number;
  formaExploracao: string;
  sequencialGrupo: number;
  areaColhida: number;
  quantidadeColhida: number;
  unidade: string;
  indicadorRestricao: string;
  responsavelExploracao: string;
  rendimento: number;
}

interface RegistroAreaExploracaoGranjeiraAgricola {
  denominacao: string;
  areaExplorada: number;
  indicadorRestricao: string;
  responsavelExploracao: string;
}

interface RegistroAreaOutrosUsos {
  denominacao: string;
  areaUtilizada: number;
  indicadorRestricao: string;
  responsavelExploracao: string;
}

interface RegistroAreaRestricaoLegalTecnica {
  denominacao: string;
  area: number;
  responsavelExploracao: string;
}

interface RegistroAreaPastagem {
  tipoPastagem: string;
  areaUtilizada: number;
  indicadorRestricao: string;
  responsavelExploracao: string;
}

interface RegistroEfetivoPecuario {
  categoria: string;
  regiao: string;
  fatorConversao: number;
  numeroCabecas: number;
  numeroEfetivoPecuario: number;
}

interface RegistroInventarioBenfeitoria {
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

interface RegistroGrauUtilizacaoTerra {
  uso: string;
  area: number;
}

interface RegistroProblemaAmbiental {
  descricao: string;
}

interface RegistroAssalariado {
  nome: string;
  cpf: string;
  situacaoTrabalhista: string;
}

@Component({
  selector: 'app-laf',
  imports: [Breadcrumb, BrInput, BrDatetimePicker, BrSelect, BrButton, BrTab, BrTabItem, BrTableCell, BrTableRow, BrTableHeaderCell, BrTableHeaderRow, BrTable,
    BrIcon, BrUpload, BrMessage, CommonModule, RouterLink, QuillModule],
  templateUrl: './laf.html',
  styleUrl: './laf.css',
})
export class Laf {

  proximaAba() {
    const tab = document.getElementById('tabLAF') as any;

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

  areaTotal: number = 1500;

  //Idenfiticação do proprietário
  registrosProprietario: RegistroProprietario[] = [
    {
      nome: '',
      detencao: 0,
      cpf: '',
      nacionalidade: '',
      endereco: '',
      telefone: '',
      nomeConjuge: '',
      cpfConjuge: ''
    }
  ];

  adicionarRegistroProprietario(): void {
    this.registrosProprietario.push({
      nome: '',
      detencao: 0,
      cpf: '',
      nacionalidade: '',
      endereco: '',
      telefone: '',
      nomeConjuge: '',
      cpfConjuge: ''
    });
  }

  removerRegistrProprietario(index: number): void {
    this.registrosProprietario.splice(index, 1);
  }

  //Situação dominial
  registrosSituacaoDominial: RegistroSituacaoDominial[] = [
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

  adicionarRegistroSituacaoDominial(): void {
    this.registrosSituacaoDominial.push({
      area: '',
      formaObtencao: '',
      registro: '',
      livro: '',
      comarca: '',
      oficio: '',
      dataRegistro: ''
    });
  }

  removerRegistrSituacaoDominial(index: number): void {
    this.registrosSituacaoDominial.splice(index, 1);
  }

  //5. Localizacao e vias de acesso
  tipoSituacaoLocalizacao: string = '';

  //Flora regional
  registrosFloraRegional: RegistroFloraRegional[] = [
    {
      nomeComum: '',
      nomeCientifico: ''
    }
  ];

  adicionarRegistroFloraRegional(): void {
    this.registrosFloraRegional.push({
      nomeComum: '',
      nomeCientifico: ''
    });
  }

  removerRegistrFloraRegional(index: number): void {
    this.registrosFloraRegional.splice(index, 1);
  }

  //Fauna regional
  registrosFaunaRegional: RegistroFaunaRegional[] = [
    {
      nomeComum: '',
      nomeCientifico: ''
    }
  ];

  adicionarRegistroFaunaRegional(): void {
    this.registrosFaunaRegional.push({
      nomeComum: '',
      nomeCientifico: ''
    });
  }

  removerRegistroFaunaRegional(index: number): void {
    this.registrosFaunaRegional.splice(index, 1);
  }

  //Uso da terra
  registrosUsoTerra: RegistroUsoTerra[] = [
    {
      descricao: '',
      unidade: '',
      quantidade: 0
    }
  ];

  adicionarRegistroUsoTerra(): void {
    this.registrosUsoTerra.push({
      descricao: '',
      unidade: '',
      quantidade: 0
    });
  }

  removerRegistroUsoTerra(index: number): void {
    this.registrosUsoTerra.splice(index, 1);
  }

  //Descrição e classificação do relevo
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

  //Classe de Capacidade de Uso das Terras
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

  //4.1. Áreas com produtos vegetais isolados
  registrosAreaProdutoVegetal: RegistroAreaProdutoVegetal[] = [
    {
      nomeProduto: '',
      areaPlantada: 0,
      areaColhida: 0,
      quantidadeColhida: 0,
      unidade: '-',
      indicadorRestricao: '',
      responsavelExploracao: '',
      rendimento: 0
    }
  ];

  adicionarRegistroAreaProdutoVegetal(): void {
    this.registrosAreaProdutoVegetal.push({
      nomeProduto: '',
      areaPlantada: 0,
      areaColhida: 0,
      quantidadeColhida: 0,
      unidade: '-',
      indicadorRestricao: '',
      responsavelExploracao: '',
      rendimento: 0
    });
  }

  removerRegistroAreaProdutoVegetal(index: number): void {
    this.registrosAreaProdutoVegetal.splice(index, 1);
  }

  totalAreaPlantada: number = 0;
  totalAreaColhida: number = 0;

  calcularTotalAreaPlantada() {
    this.totalAreaPlantada = this.registrosAreaProdutoVegetal.reduce(
      (total, registro) => total + (registro.areaPlantada || 0),
      0
    );
  }

  calcularTotalAreaColhida() {
    this.totalAreaColhida = this.registrosAreaProdutoVegetal.reduce(
      (total, registro) => total + (registro.areaColhida || 0),
      0
    );
  }

  obterUnidade(producao: string): string {
    const unidades: Record<string, string> = {
      'Abacate': 'Cento',
      'Abacaxi': 'Cento',
      'Agave': 'Ton.',
      'Alfafa': 'Ton.',
      'Algodão arbóreo (N e NE)': 'Ton.',
      'Algodão arbóreo (Rest. País)': 'Ton.',
      'Algodão Herbáceo (N e NE)': 'Ton.',
      'Algodão Herbáceo (SE menos SP)': 'Ton.',
      'Algodão Herbáceo (Rest. País)': 'Ton.',
      'Alho': 'Ton.',
      'Amendoim (N e NE)': 'Ton.',
      'Amendoim (Rest. País)': 'Ton.',
      'Arroz de Sequeiro (Sul)': 'Ton.',
      'Arroz de Sequeiro (Rest. País)': 'Ton.',
      'Arroz de Várzea (RS)': 'Ton.',
      'Arroz de Várzea (SC)': 'Ton.',
      'Arroz de Várzea (Rest País)': 'Ton.',
      'Banana': 'Cachos',
      'Batata Doce': 'Ton.',
      'Batata Inglesa (SP)': 'Ton.',
      'Batata Inglesa (PR e MG)': 'Ton.',
      'Batata Inglesa (Rest. País)': 'Ton.',
      'Cacau': 'Ton.',
      'Café (S e SE)': 'Ton.',
      'Café (Rest. País)': 'Ton.',
      'Caju': 'Cento',
      'Cana de Açúcar (SP e PR)': 'Ton.',
      'Cana de Açúcar (Rest. País)': 'Ton.',
      'Cebola': 'Ton.',
      'Chá': 'Ton.',
      'Côco da Bahia': 'Cento',
      'Fava': 'Ton.',
      'Feijão (Sul)': 'Ton.',
      'Feijão (Rest. País)': 'Ton.',
      'Fumo (Sul)': 'Ton.',
      'Fumo (Rest. País)': 'Ton.',
      'Juta': 'Ton.',
      'Laranja': 'Cento',
      'Limão': 'Cento',
      'Linho': 'Ton.',
      'Mamona (NE)': 'Ton.',
      'Mamona (Rest. País)': 'Ton.',
      'Mandioca (NE)': 'Ton.',
      'Mandioca (Rest. País)': 'Ton.',
      'Manga': 'Cento',
      'Milho (Sul e SP)': 'Ton.',
      'Milho (N e NE)': 'Ton.',
      'Milho (Rest. País)': 'Ton.',
      'Pêssego': 'Cento',
      'Pimenta do Reino (N)': 'Ton.',
      'Pimenta do Reino (Rest. País)': 'Ton.',
      'Soja (PR e SP)': 'Ton.',
      'Soja (SC e RS)': 'Ton.',
      'Soja (Rest País)': 'Ton.',
      'Tangerina': 'Cento',
      'Tomate (S e SE)': 'Ton.',
      'Tomate (Rest. País)': 'Ton.',
      'Trigo (RS)': 'Ton.',
      'Trigo (Rest. País)': 'Ton.',
      'Uva (Sul e SP)': 'Ton.',
      'Uva (Rest. País)': 'Ton.',
      'Acácia Negra': 'Ton.',
      'Babaçu': 'Ton.',
      'Borracha Natural': 'quilo',
      'Carnaúba (cera)': 'Ton.',
      'Castanha do Pará': 'Ton.',
      'Guaraná (sementes)': 'Ton.',
      'Madeira': 'm³'
    };

    return unidades[producao.trim()] ?? '-';
  }

  obterRendimentoPorArea(insumo: string): number {
    const rendimentos: Record<string, number> = {
      'Abacate': 300,
      'Abacaxi': 120,
      'Agave': 0.70,
      'Alfafa': 6.00,
      'Algodão arbóreo (N e NE)': 0.20,
      'Algodão arbóreo (Rest. País)': 0.60,
      'Algodão Herbáceo (N e NE)': 0.30,
      'Algodão Herbáceo (SE menos SP)': 0.60,
      'Algodão Herbáceo (Rest País)': 1.20,
      'Alho': 3.00,
      'Amendoim (N e NE)': 1.00,
      'Amendoim (Rest. País)': 1.50,
      'Arroz de Sequeiro (Sul)': 1.30,
      'Arroz de Sequeiro (Rest. País)': 9.00,
      'Arroz de Várzea (RS)': 3.40,
      'Arroz de Várzea (SC)': 2.50,
      'Arroz de Várzea (Rest País)': 1.40,
      'Banana': 700,
      'Batata Doce': 6.00,
      'Batata Inglesa (SP)': 12.00,
      'Batata Inglesa (PR e MG)': 9.00,
      'Batata Inglesa (Rest. País)': 5.00,
      'Cacau': 0.70,
      'Café (S e SE)': 1.50,
      'Café (Rest. País)': 1.00,
      'Caju': 500,
      'Cana de Açúcar (SP e PR)': 70.00,
      'Cana de Açúcar (Rest. País)': 50.00,
      'Cebola': 7.00,
      'Chá': 5.00,
      'Côco da Bahia': 20,
      'Fava': 0.30,
      'Feijão (Sul)': 0.60,
      'Feijão (Rest. País)': 0.30,
      'Fumo (Sul)': 1.40,
      'Fumo (Rest. País)': 0.80,
      'Juta': 1.30,
      'Laranja': 800,
      'Limão': 1000,
      'Linho': 0.60,
      'Mamona (NE)': 0.60,
      'Mamona (Rest. País)': 1.20,
      'Mandioca (NE)': 7.00,
      'Mandioca (Rest. País)': 12.00,
      'Manga': 500,
      'Milho (Sul e SP)': 1.90,
      'Milho (N e NE)': 0.60,
      'Milho (Rest. País)': 1.30,
      'Pêssego': 600,
      'Pimenta do Reino (N)': 3.20,
      'Pimenta do Reino (Rest. País)': 1.20,
      'Soja (PR e SP)': 1.90,
      'Soja (SC e RS)': 1.40,
      'Soja (Rest País)': 1.20,
      'Tangerina': 700,
      'Tomate (S e SE)': 30.00,
      'Tomate (Rest. País)': 20.00,
      'Trigo (RS)': 0.80,
      'Trigo (Rest. País)': 1.00,
      'Uva (Sul e SP)': 12.00,
      'Uva (Rest. País)': 8.00,
      'Acácia Negra': 8.00,
      'Babaçu': 0.10,
      'Borracha Natural': 2.00,
      'Carnaúba (cera)': 0.05,
      'Castanha do Pará': 20.00,
      'Guaraná (sementes)': 0.03,
      'Madeira': 50.00
    };

    return rendimentos[insumo.trim()] ?? 0;
  }

  //4.2. Áreas com produtos vegetais em consórcio ou rotação
  registrosAreaProdutoVegetalConsorcioRotacao: RegistroAreaProdutoVegetalConsorcioRotacao[] = [
    {
      nomeProduto: '',
      formaExploracao: '',
      sequencialGrupo: 0,
      areaPlantada: 0,
      areaColhida: 0,
      quantidadeColhida: 0,
      unidade: '-',
      indicadorRestricao: '',
      responsavelExploracao: '',
      rendimento: 0
    }
  ];

  adicionarRegistroAreaProdutoVegetalConsorcioRotacao(): void {
    this.registrosAreaProdutoVegetalConsorcioRotacao.push({
      nomeProduto: '',
      formaExploracao: '',
      sequencialGrupo: 0,
      areaPlantada: 0,
      areaColhida: 0,
      quantidadeColhida: 0,
      unidade: '-',
      indicadorRestricao: '',
      responsavelExploracao: '',
      rendimento: 0
    });
  }

  removerRegistroAreaProdutoVegetalConsorcioRotacao(index: number): void {
    this.registrosAreaProdutoVegetal.splice(index, 1);
  }

  totalAreaPlantadaConsorcioRotacao: number = 0;
  totalAreaColhidaConsorcioRotacao: number = 0;

  calcularTotalAreaPlantadaConsorcioRotacao() {
    this.totalAreaPlantadaConsorcioRotacao = this.registrosAreaProdutoVegetalConsorcioRotacao.reduce(
      (total, registro) => total + (registro.areaPlantada || 0),
      0
    );
  }

  calcularTotalAreaColhidaConsorcioRotacao() {
    this.totalAreaColhidaConsorcioRotacao = this.registrosAreaProdutoVegetalConsorcioRotacao.reduce(
      (total, registro) => total + (registro.areaColhida || 0),
      0
    );
  }

  //4.3. Áreas de exploração granjeira ou aquícola
  registrosAreaExploracaoGranjeiraAgricola: RegistroAreaExploracaoGranjeiraAgricola[] = [
    {
      denominacao: '',
      areaExplorada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    }
  ];

  adicionarRegistroAreaExploracaoGranjeiraAgricola(): void {
    this.registrosAreaExploracaoGranjeiraAgricola.push({
      denominacao: '',
      areaExplorada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    });
  }

  removerRegistroAreaExploracaoGranjeiraAgricola(index: number): void {
    this.registrosAreaExploracaoGranjeiraAgricola.splice(index, 1);
  }

  totalAreaExploracaoGranjeiraAgricola: number = 0;

  calcularTotalAreaExploracaoGranjeiraAgricola() {
    this.totalAreaExploracaoGranjeiraAgricola = this.registrosAreaExploracaoGranjeiraAgricola.reduce(
      (total, registro) => total + (registro.areaExplorada || 0),
      0
    );
  }

  //4.4. Áreas com outros usos
  registrosAreaOutrosUsos: RegistroAreaOutrosUsos[] = [
    {
      denominacao: '',
      areaUtilizada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    }
  ];

  adicionarRegistroAreaOutrosUsos(): void {
    this.registrosAreaOutrosUsos.push({
      denominacao: '',
      areaUtilizada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    });
  }

  removerRegistroAreaOutrosUsos(index: number): void {
    this.registrosAreaOutrosUsos.splice(index, 1);
  }

  totalAreaOutrosUsos: number = 0;

  calcularTotalAreaOutrosUsos() {
    this.totalAreaOutrosUsos = this.registrosAreaOutrosUsos.reduce(
      (total, registro) => total + (registro.areaUtilizada || 0),
      0
    );
  }

  //4.5. Áreas com restrição legal/técnica
  registrosAreaRestricaoLegalTecnica: RegistroAreaRestricaoLegalTecnica[] = [
    {
      denominacao: '',
      area: 0,
      responsavelExploracao: ''
    }
  ];

  adicionarRegistroAreaRestricaoLegalTecnica(): void {
    this.registrosAreaRestricaoLegalTecnica.push({
      denominacao: '',
      area: 0,
      responsavelExploracao: ''
    });
  }

  removerRegistroAreaRestricaoLegalTecnica(index: number): void {
    this.registrosAreaRestricaoLegalTecnica.splice(index, 1);
  }

  totalAreaRestricaoLegalTecnica: number = 0;

  calcularTotalAreaRestricaoLegalTecnica() {
    this.totalAreaRestricaoLegalTecnica = this.registrosAreaRestricaoLegalTecnica.reduce(
      (total, registro) => total + (registro.area || 0),
      0
    );
  }

  //4.4. Áreas com outros usos
  registrosAreaPastagem: RegistroAreaPastagem[] = [
    {
      tipoPastagem: '',
      areaUtilizada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    }
  ];

  adicionarRegistroAreaPastagem(): void {
    this.registrosAreaPastagem.push({
      tipoPastagem: '',
      areaUtilizada: 0,
      indicadorRestricao: '',
      responsavelExploracao: ''
    });
  }

  removerRegistroAreaPastagem(index: number): void {
    this.registrosAreaPastagem.splice(index, 1);
  }

  totalAreaPastagem: number = 0;

  calcularTotalAreaPastagem() {
    this.totalAreaPastagem = this.registrosAreaPastagem.reduce(
      (total, registro) => total + (registro.areaUtilizada || 0),
      0
    );
  }

  //5. Efetivo Pecuário
  registrosEfetivoPecuario: RegistroEfetivoPecuario[] = [
    {
      categoria: '',
      regiao: '',
      fatorConversao: 0,
      numeroCabecas: 0,
      numeroEfetivoPecuario: 0
    }
  ];

  adicionarRegistroEfetivoPecuario(): void {
    this.registrosEfetivoPecuario.push({
      categoria: '',
      regiao: '',
      fatorConversao: 0,
      numeroCabecas: 0,
      numeroEfetivoPecuario: 0
    });
  }

  removerRegistrototalEfetivoPecuario(index: number): void {
    this.registrosEfetivoPecuario.splice(index, 1);
  }

  totalEfetivoPecuario: number = 0;

  calcularTotaltotalEfetivoPecuario() {
    this.totalEfetivoPecuario = this.registrosEfetivoPecuario.reduce(
      (total, registro) => total + (registro.numeroEfetivoPecuario || 0),
      0
    );
  }

  obterFatorConversao(categoriaAnimal: string, regiao: string): number {
    const fatores: Record<string, Record<string, number>> = {
      'Touros (Reprodutor)': {
        'Sul': 1.39,
        'Sudeste e Centro-Oeste': 1.39,
        'Norte': 1.32,
        'Nordeste': 1.24
      },
      'Vacas 3 anos e mais': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Bois 3 anos e mais': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Bois de 2 a menos de 3 anos': {
        'Sul': 0.75,
        'Sudeste e Centro-Oeste': 0.75,
        'Norte': 0.69,
        'Nordeste': 0.63
      },
      'Novilhas de 2 a menos de 3 anos': {
        'Sul': 0.75,
        'Sudeste e Centro-Oeste': 0.75,
        'Norte': 0.69,
        'Nordeste': 0.63
      },
      'Bovinos de 1 a menos de 2 anos': {
        'Sul': 0.50,
        'Sudeste e Centro-Oeste': 0.50,
        'Norte': 0.47,
        'Nordeste': 0.42
      },
      'Bovinos menores de 1 ano': {
        'Sul': 0.31,
        'Sudeste e Centro-Oeste': 0.31,
        'Norte': 0.28,
        'Nordeste': 0.26
      },
      'Novilhos Precoces de 2 anos e mais': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Novilhas Precoces de 2 anos e mais': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Novilhos Precoces de 1 a menos de 2 anos': {
        'Sul': 0.87,
        'Sudeste e Centro-Oeste': 0.87,
        'Norte': 0.80,
        'Nordeste': 0.72
      },
      'Novilhas precoces de 1 a menos de 2 anos': {
        'Sul': 0.87,
        'Sudeste e Centro-Oeste': 0.87,
        'Norte': 0.80,
        'Nordeste': 0.72
      },
      'Bubalinos': {
        'Sul': 1.25,
        'Sudeste e Centro-Oeste': 1.25,
        'Norte': 1.15,
        'Nordeste': 1.05
      },
      'Equinos': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Asininos': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Muares': {
        'Sul': 1.00,
        'Sudeste e Centro-Oeste': 1.00,
        'Norte': 0.92,
        'Nordeste': 0.83
      },
      'Ovinos': {
        'Sul': 0.25,
        'Sudeste e Centro-Oeste': 0.25,
        'Norte': 0.22,
        'Nordeste': 0.19
      },
      'Caprinos': {
        'Sul': 0.25,
        'Sudeste e Centro-Oeste': 0.25,
        'Norte': 0.22,
        'Nordeste': 0.19
      }
    };

    return fatores[categoriaAnimal]?.[regiao] ?? 0;
  }

  obterIndicePecuaria(zonaPec: number): number {
    const indices: Record<number, number> = {
      1: 1.20,
      2: 0.80,
      3: 0.46,
      4: 0.23,
      5: 0.13
    };

    return indices[zonaPec] ?? 0;
  }

  //6. Inventário de benfeitorias
  inventarioBenfeitorias: RegistroInventarioBenfeitoria[] = [
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

  //7. Grau de utilização da terra
  registroaGrauUtilizacaoTerra: RegistroGrauUtilizacaoTerra[] = [
    {
      uso: '',
      area: 0
    }
  ];

  adicionarRegistroGrauUtilizacaoTerra(): void {
    this.registroaGrauUtilizacaoTerra.push({
      uso: '',
      area: 0
    });
  }

  removerRegistroGrauUtilizacaoTerra(index: number): void {
    this.registroaGrauUtilizacaoTerra.splice(index, 1);
  }

  totalGrauUtilizacaoTerra: number = 0;

  calcularTotalGrauUtilizacaoTerra() {
    this.totalGrauUtilizacaoTerra = this.registroaGrauUtilizacaoTerra.reduce(
      (total, registro) => total + (registro.area || 0),
      0
    );
  }

  //Área aproveitável
  areaBenfeitoria: number = 0;
  areaMataAtlantica: number = 0;
  areaAppTotal: number = 0;
  areaReservaLegal: number = 0;
  areaOcupadaCorpoaDagua: number = 0;

  totalAreaAproveitavel: number = this.areaTotal;

  calcularTotalAreaAproveitavel() {
    this.totalAreaAproveitavel = this.areaTotal - (this.areaBenfeitoria + this.areaMataAtlantica + this.areaAppTotal + this.areaReservaLegal + this.areaOcupadaCorpoaDagua);
  }

  formatGrauUtilizacaoTerra(): number {
    const resultado = this.totalGrauUtilizacaoTerra / this.totalAreaAproveitavel;

    if (Number.isNaN(resultado)) return 0;
    if (!Number.isFinite(resultado)) return 1;

    return resultado * 100;
  }

  //8. CONSERVAÇÃO DOS RECURSOS NATURAIS
  registrosProblemaAmbiental: RegistroProblemaAmbiental[] = [
    {
      descricao: ''
    }
  ];

  adicionarRegistroProblemaAmbiental(): void {
    this.registrosProblemaAmbiental.push({
      descricao: ''
    });
  }

  removerRegistroProblemaAmbiental(index: number): void {
    this.registrosProblemaAmbiental.splice(index, 1);
  }

  //9. ASPECTOS SOCIAIS E TRABALHISTAS
  registrosAssalariado: RegistroAssalariado[] = [
    {
      nome: '',
      cpf: '',
      situacaoTrabalhista: ''
    }
  ];

  adicionarRegistroAssalariado(): void {
    this.registrosAssalariado.push({
      nome: '',
      cpf: '',
      situacaoTrabalhista: ''
    });
  }

  removerRegistroAssalariado(index: number): void {
    this.registrosAssalariado.splice(index, 1);
  }

  //10. USO POTENCIAL RECOMENDADO / VIABILIDADE DE ASSENTAMENTO
  tipoCalculoCapacidadeFamilias: string = '';

  notaAgronomicaCapacidadeFamilias: number = 0;
  areaReservaLegalCapacidadeFamilias: number = 0;
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
}