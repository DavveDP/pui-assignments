import { ElementRef } from '@angular/core';
import { HighlightOnFocusDirective } from './highlight-on-focus.directive';

describe('HighlightOnFocusDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const directive = new HighlightOnFocusDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
