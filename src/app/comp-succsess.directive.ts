import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[appCompSuccsess]'
})
export class CompSuccsessDirective {

  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('green');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }
}





