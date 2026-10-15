import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrButton } from '@govbr-ds/webcomponents-angular/standalone';
import { Breadcrumb } from '../../../../../componentes/breadcrumb/breadcrumb';

@Component({
  selector: 'app-lvagerado',
  imports: [BrButton, RouterLink, Breadcrumb],
  templateUrl: './lvagerado.html',
  styleUrl: './lvagerado.css',
})
export class Lvagerado {

}
