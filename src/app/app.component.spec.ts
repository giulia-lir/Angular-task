import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the three buttons available`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const button1 = fixture.nativeElement.querySelector('button:contains("Open Dialog 1")');
    const button2 = fixture.nativeElement.querySelector('button:contains("Open Dialog 2")');
    const button3 = fixture.nativeElement.querySelector('button:contains("Open Dialog 3")');

    expect(button1).toBeTruthy();
    expect(button2).toBeTruthy();
    expect(button3).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Angular_Task');
  });
});
