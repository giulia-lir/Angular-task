import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  close(close: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
  @Input() title: string = 'Dialog';
  @Input() content: any;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

  onCloseButtonClick(): void {
    this.closeDialog.emit();
  }
}