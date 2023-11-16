import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[iconControl]'
})
export class IconControlDirective {

  constructor(
    private el:ElementRef<HTMLButtonElement>
  ) { }


  @HostListener("mouseenter")mouseenter(){
    console.log(this.el);
    
  }
  @HostListener("mouseleave")mouseleave(){
    this.el.nativeElement.className="btn btn-outline-secondary d-flex justify-content-between w-100 align-items-center"
  }
}
