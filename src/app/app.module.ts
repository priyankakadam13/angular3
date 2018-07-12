import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompSuccsessDirective } from './comp-succsess.directive';
import { CompFailularDirective } from './comp-failular.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccsessDirective,
    CompFailularDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
