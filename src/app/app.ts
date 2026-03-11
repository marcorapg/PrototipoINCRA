import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumb } from './componentes/breadcrumb/breadcrumb';
import { Footer } from './componentes/footer/footer';
import { Header } from './componentes/header/header';
import { Menu } from './componentes/menu/menu';

declare const core: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Breadcrumb, Footer, Header, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements AfterViewInit {
  protected readonly title = signal('prototipoincra');
  ngAfterViewInit(): void {

    const header = document.querySelector('.br-header');
    if (header) new core.BRHeader('br-header', header);

    const menu = document.querySelector('.br-menu');
    if (menu) new core.BRMenu('br-menu', menu);

    const checkboxList = []
    for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
      checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
    }

    const inputList = []
    for (const brInput of window.document.querySelectorAll('.br-input')) {
      inputList.push(new core.BRInput('br-input', brInput))
    }

    const tooltipList = []
    for (const brTooltip of window.document.querySelectorAll('.br-tooltip:not(.utilities)')) {
      tooltipList.push(new core.BRTooltip('br-tooltip', brTooltip))
    }

    const itemList = []
    for (const brItem of window.document.querySelectorAll('.br-item')) {
      itemList.push(new core.BRItem('br-item', brItem))
    }

    const selectList = []
    const notFoundElement = `
    <div class="br-item not-found">
      <div class="container">
      <div class="row">
        <div class="col">
        <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
        </div>
      </div>
      </div>
    </div>
    `
    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      //Exemplo de uso de listener do select
      brSelect.addEventListener('onChange', function (e) { })
      selectList.push(brselect)
    }

    const breadcrumbList = []
    for (const brBreadcrumb of window.document.querySelectorAll('.br-breadcrumb')) {
      breadcrumbList.push(new core.BRBreadcrumb('br-breadcrumb', brBreadcrumb))
    }
  }
}