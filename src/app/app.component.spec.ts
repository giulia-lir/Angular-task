import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

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

  it(`3 buttons should be present`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#button1');
    const btn2 = fixture.debugElement.nativeElement.querySelector('#button2');
    const btn3 = fixture.debugElement.nativeElement.querySelector('#button3');

    expect(btn).toBeTruthy();
    expect(btn2).toBeTruthy();
    expect(btn3).toBeTruthy();
  })

  it(`Buttons tags should be "Open dialog 1/2/3"`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#button1');
    const btn2 = fixture.debugElement.nativeElement.querySelector('#button2');
    const btn3 = fixture.debugElement.nativeElement.querySelector('#button3');

    expect(btn.innerHTML).toBe('Open dialog 1');
    expect(btn2.innerHTML).toBe('Open dialog 2');
    expect(btn3.innerHTML).toBe('Open dialog 3');
  });
});
