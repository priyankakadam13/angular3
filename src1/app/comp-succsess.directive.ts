import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';
import { Type } from '@angular/compiler/src/output/output_ast';
@Directive({
  selector: '[appCompSuccsess]'
})
export class CompSuccsessDirective {

  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.background='yellow'
    ele.nativeElement.style.text='bold'
    
  }




  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  
    
  }
  settype(type:string)
  {
    this.ele.nativeElement.style.text=type;
  
    
  }
}





