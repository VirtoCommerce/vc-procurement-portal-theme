import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRemoveWrapper]'
})
export class RemoveWrapperDirective {

  constructor(private el: ElementRef) {
    const wrapperElement = el.nativeElement.parentElement;
    const element = el.nativeElement;
    const parentNode = wrapperElement.parentNode;
    const nextElement = wrapperElement.nextSibling;
    wrapperElement.removeChild(element);
    if (nextElement) {
      parentNode.insertBefore(element, wrapperElement.nextSibling);
    } else {
      parentNode.appendChild(element);
    }
    parentNode.removeChild(wrapperElement);
  }
}
