import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  width : string = "";

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { }

  @HostListener("mouseenter") mouseenter(){
    this.renderer.addClass(this.el.nativeElement,'zoom');

  }

  @HostListener("mouseleave") mouseleave(){
    this.renderer.removeClass(this.el.nativeElement,'zoom');


  }

}
