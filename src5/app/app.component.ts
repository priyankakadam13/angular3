import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  pages: number;
  auther: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'wise & otherwisw', auther: 'sudha murthy', pages:200},
  {position: 2, name: 'mahashweta', auther: 'sudha murthy', pages:250},
  {position: 3, name: 'ignited minds', auther:'abdul kalam', pages: 300},
  {position: 4, name: 'jeevan vriksh', auther:'abdul kalam', pages: 350},
  {position: 5, name: 'wings of fire', auther: 'abdul kalam', pages: 200},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  displayedColumns: string[] = ['posistion','name','auther','pages'];

  dataSource = ELEMENT_DATA;
}
