import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[appCompFailular]'
})
export class CompFailularDirective {

  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');
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


