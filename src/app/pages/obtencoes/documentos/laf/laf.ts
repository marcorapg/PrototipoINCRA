import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../componentes/breadcrumb/breadcrumb';
import { Router, RouterLink } from '@angular/router';
import { BrInput, BrDatetimePicker, BrTextarea, BrUpload, BrTable, BrTableRow, BrTableHeaderCell, BrTableCell, BrTableHeaderRow, BrButton, BrIcon, BrTooltip, BrTab, BrTabItem, BrSelect, BrRadio, BrScrim, BrModal, BrMessage } from '@govbr-ds/webcomponents-angular/standalone';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-laf',
  imports: [Breadcrumb, BrInput, BrDatetimePicker, BrTextarea, BrUpload, BrTable, BrTableRow, BrSelect, BrRadio, BrScrim, BrModal, BrMessage,
    BrTableHeaderCell, BrTableCell, BrTableHeaderRow, BrButton, BrIcon, BrTab, BrTabItem, CommonModule, RouterLink, QuillModule],
  templateUrl: './laf.html',
  styleUrl: './laf.css',
})
export class Laf {
  areaTotal: number = 0;
}
