import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../../componentes/breadcrumb/breadcrumb';
import { BrButton } from '@govbr-ds/webcomponents-angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lafgerado',
  imports: [BrButton, Breadcrumb, RouterLink],
  templateUrl: './lafgerado.html',
  styleUrl: './lafgerado.css',
})
export class Lafgerado {

}
