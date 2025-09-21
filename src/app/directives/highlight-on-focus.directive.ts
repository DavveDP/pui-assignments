import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.highlight('#f1f1f1ff', true);
  }

  @HostListener('blur') onBlur() {
    this.highlight('white');
  }

  private highlight(color: string, important: boolean = false) {
    this.el.nativeElement.style.setProperty('background-color', color, important ? 'important' : '');
  }
}
