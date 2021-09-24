import { AutofocusDirective } from './autofocus.directive';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    <input name="toto" />
    <input name="titi" appAutofocus />
  </div>`,
})
export class TestComponent {}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should focus', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titi = compiled.querySelector('input[name="titi"');
    const focus = document.activeElement;
    expect(titi === focus).toBeTrue();
  });
});
