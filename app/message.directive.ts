import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[showMessage]' })
export class MessageDirective {

    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'cursor', 'pointer');
       renderer.listen(el.nativeElement, 'click', function(){
         alert('Test');
       });
    }
}
