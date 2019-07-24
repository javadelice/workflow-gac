import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C3Component } from './c3/c3.component';
import { C1ClementSamnaelComponent } from './c1-clement-samnael/c1-clement-samnael.component';
import { C2Component } from './c2/c2.component';


@NgModule({
  declarations: [
    AppComponent,
    C3Component
    C1ClementSamnaelComponent,
    C2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
