import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrSelect, BrTextarea, BrCard, BrButton } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../../componentes/breadcrumb/breadcrumb';


@Component({
  selector: 'app-analisarofertaimovel',
  imports: [BrCard, BrSelect, BrTextarea, BrButton, RouterLink, Breadcrumb],
  templateUrl: './analisarofertaimovel.html',
  styleUrl: './analisarofertaimovel.css',
})
export class Analisarofertaimovel {
  resultadoAnaliseOptions = [{ label: 'Rejeitado', value: 'rejeitado' }, { label: 'Qualificado', value: 'qualificado' }];
}
