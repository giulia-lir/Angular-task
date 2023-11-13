import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() title: string = 'Dialog';
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

  onCloseButtonClick(): void {
    this.closeDialog.emit();
  }
}