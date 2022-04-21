import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatterDirective {
  @Input('format') format: any;

  constructor( private el: ElementRef ) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.format == 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      let firstLetterCap = value.charAt(0).toUpperCase() + value.slice(1);
      this.el.nativeElement.value = firstLetterCap;
    }
  }

  // @HostListener('focus') onFocus() {
  //   console.log('on focus');
  // }
}
