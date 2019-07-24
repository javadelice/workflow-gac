import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1ClementSamnaelComponent } from './c1-clement-samnael/c1-clement-samnael.component';

@NgModule({
  declarations: [
    AppComponent,
    C1ClementSamnaelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
