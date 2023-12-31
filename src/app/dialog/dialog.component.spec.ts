import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { AppComponent } from '../app.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dialog', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.dialog-header h2');
    expect(titleElement.textContent).toContain('Test Title');
  });

  it('should display the correct content', () => {
    component.content = 'Test content'
    fixture.detectChanges();
    const contentElement: HTMLElement = fixture.nativeElement.querySelector('.dialog-content p');
    expect(contentElement.textContent).toContain('Test content')
  });

  it('should close the dialog when X button is clicked', () => {
    spyOn(component.closeDialog, 'emit');
    const closeButton: HTMLElement = fixture.nativeElement.querySelector('.dialog-header button');
    closeButton.click();
    expect(component.closeDialog.emit).toHaveBeenCalled();
  });
});
