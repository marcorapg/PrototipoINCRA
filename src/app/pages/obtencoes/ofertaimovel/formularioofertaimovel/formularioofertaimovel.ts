import { Component } from '@angular/core';
import { BrButton, BrCard, BrCheckbox, BrInput, BrSelect, BrUpload } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularioofertaimovel',
  imports: [BrButton, BrCard, BrCheckbox, BrInput, BrSelect, BrUpload, Breadcrumb, RouterLink, CommonModule],
  templateUrl: './formularioofertaimovel.html',
  styleUrl: './formularioofertaimovel.css',
})
export class Formularioofertaimovel {

  tipoOferta: string = '';

  alterarTipoOferta(event: Event) {
    const select = event.target as HTMLElement & { value: string };

    this.tipoOferta = select.value;
    console.log(select.value);
  }

  tipoOfertaOptions = [
    { label: 'Venda', value: 'venda' },
    { label: 'Doação', value: 'doacao' },
    { label: 'Leilão', value: 'leilao' }
  ];

  nacionalidadeOptions = [
    { label: 'Brasileira', value: 'brasileira' },
    { label: 'Estrangeira', value: 'estrangeira' }
  ];

  estadoCivilOptions = [
    { label: 'Solteiro(a)', value: 'solteiro' },
    { label: 'Casado(a)', value: 'casado' },
    { label: 'Divorciado(a)', value: 'divorciado' },
    { label: 'Viúvo(a)', value: 'viuvo' },
    { label: 'Separado(a)', value: 'separado' },
    { label: 'União estável', value: 'uniao-estavel' }
  ];

  estados = [
    { label: 'Acre', value: 'AC' },
    { label: 'Alagoas', value: 'AL' },
    { label: 'Amapá', value: 'AP' },
    { label: 'Amazonas', value: 'AM' },
    { label: 'Bahia', value: 'BA' },
    { label: 'Ceará', value: 'CE' },
    { label: 'Distrito Federal', value: 'DF' },
    { label: 'Espírito Santo', value: 'ES' },
    { label: 'Goiás', value: 'GO' },
    { label: 'Maranhão', value: 'MA' },
    { label: 'Mato Grosso', value: 'MT' },
    { label: 'Mato Grosso do Sul', value: 'MS' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'Pará', value: 'PA' },
    { label: 'Paraíba', value: 'PB' },
    { label: 'Paraná', value: 'PR' },
    { label: 'Pernambuco', value: 'PE' },
    { label: 'Piauí', value: 'PI' },
    { label: 'Rio de Janeiro', value: 'RJ' },
    { label: 'Rio Grande do Norte', value: 'RN' },
    { label: 'Rio Grande do Sul', value: 'RS' },
    { label: 'Rondônia', value: 'RO' },
    { label: 'Roraima', value: 'RR' },
    { label: 'Santa Catarina', value: 'SC' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Sergipe', value: 'SE' },
    { label: 'Tocantins', value: 'TO' }
  ];

  municipios = [
    { label: 'Belo Horizonte', value: 'belo-horizonte' },
    { label: 'Contagem', value: 'contagem' },
    { label: 'Uberlândia', value: 'uberlandia' }
  ];

}
