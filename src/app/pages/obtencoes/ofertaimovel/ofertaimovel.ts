import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrCard } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-ofertaimovel',
  imports: [BrCard, RouterLink, Breadcrumb],
  templateUrl: './ofertaimovel.html',
  styleUrl: './ofertaimovel.css',
})

export class Ofertaimovel {

}