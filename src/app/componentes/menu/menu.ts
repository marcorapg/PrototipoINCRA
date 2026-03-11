import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare const core: any;

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements AfterViewInit {

  ngAfterViewInit(): void {

    const menu = document.querySelector('.br-menu');
    if (menu) new core.BRMenu('br-menu', menu);

  }
}
