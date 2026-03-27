import { AfterViewInit, Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { CommonModule } from '@angular/common';
import { BrTable, BrTableCell, BrTableHeaderCell, BrTableHeaderRow, BrTableRow, BrCheckbox } from '@govbr-ds/webcomponents-angular/standalone';

declare const core: any;

@Component({
  selector: 'app-processamentolote',
  imports: [Breadcrumb, CommonModule, BrTable, BrTableCell, BrTableRow, BrTableHeaderRow, BrTableHeaderCell, BrCheckbox],
  templateUrl: './processamentolote.html',
  styleUrl: './processamentolote.css',
})
export class Processamentolote implements AfterViewInit {


  ngAfterViewInit(): void {
    const checkboxList = []
    for (const brCheckbox of window.document.querySelectorAll('.br-checkbox')) {
      checkboxList.push(new core.BRCheckbox('br-checkbox', brCheckbox))
    }

    const tableList = []
    for (const [index, brTable] of window.document.querySelectorAll('.br-table').entries()) {
      tableList.push(new core.BRTable('br-table', brTable, index))
    }
  }
}
