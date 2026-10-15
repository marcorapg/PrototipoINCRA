import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrCard } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-documentos',
  imports: [BrCard, RouterLink, Breadcrumb],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css',
})
export class Documentos {

}
