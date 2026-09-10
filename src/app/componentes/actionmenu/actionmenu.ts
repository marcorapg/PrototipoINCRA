import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { BrButton, BrIcon } from '@govbr-ds/webcomponents-angular/standalone';

export interface MenuAction {
  label: string;
  type: 'modal' | 'link';
  icon?: string;
  url?: string;
  modalId?: string;
}

@Component({
  selector: 'app-actionmenu',
  imports: [BrButton, BrIcon],
  templateUrl: './actionmenu.html',
  styleUrl: './actionmenu.css',
})

export class ActionMenu {
  @Input() actions: MenuAction[] = [];

  @Output() modalAction = new EventEmitter<MenuAction>();

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  executeAction(action: MenuAction): void {

    if (action.type === 'modal') {
      this.modalAction.emit(action);
      this.closeMenu();
      return;
    }

    if (action.type === 'link' && action.url) {
      this.closeMenu();
      window.location.href = action.url;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    const target = event.target as HTMLElement;

    if (!target.closest('.action-menu')) {
      this.closeMenu();
    }
  }
}
