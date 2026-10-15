import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrCard } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-controleprocessos',
  imports: [BrCard, RouterLink, Breadcrumb],
  templateUrl: './controleprocessos.html',
  styleUrl: './controleprocessos.css',
})
export class Controleprocessos {

}
