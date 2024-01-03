import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  width : string = "";

  constructor(
    private el:ElementRef<HTMLDivElement>
  ) { }

  @HostListener("mouseenter") mouseenter(){

  }

  @HostListener("mouseleave") mouseleave(){

  }

}
