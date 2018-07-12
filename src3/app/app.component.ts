import { Component } from '@angular/core';

export interface city {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  selectedValue: string;


  cities: city[] = [
    {value: 'karad', viewValue: 'karad'},
    {value: 'satara', viewValue: 'satara'},
    {value: 'pune', viewValue: 'pune'}
  ];
  
}

