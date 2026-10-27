import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BrButton } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-lvagerado',
  imports: [BrButton, RouterLink, Breadcrumb],
  templateUrl: './lvagerado.html',
  styleUrl: './lvagerado.css',
})
export class Lvagerado {

  constructor(private router: Router) { }

  abrirAnexos() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/obtencoes/documentos/lva/lvaanexos'])
    );

    window.open(url, '_blank');
  }

}