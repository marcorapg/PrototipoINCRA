import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrCard } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-obtencoes',
  imports: [BrCard, RouterLink, Breadcrumb],
  templateUrl: './obtencoes.html',
  styleUrl: './obtencoes.css',
})
export class Obtencoes {

}
