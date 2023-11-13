import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDialog1: boolean = false;
  showDialog2: boolean = false;
  showDialog3: boolean = false;

  constructor(){}

  openDialog(dialogNumber: number): void {
    if (dialogNumber === 1) {
      this.showDialog1 = true;
    } else if (dialogNumber === 2) {
      this.showDialog2 = true;
    } else if (dialogNumber === 3) {
      this.showDialog3 = true;
    }
  }

  closeDialog(dialogNumber: number): void {
    if (dialogNumber === 1) {
      this.showDialog1 = false;
    } else if (dialogNumber === 2) {
      this.showDialog2 = false;
    } else if (dialogNumber === 3) {
      this.showDialog3 = false;
    }
  }

  submitForm(): void {
    this.closeDialog(3);
  }
  
}