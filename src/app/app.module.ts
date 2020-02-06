import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceCalendarModule } from 'ace-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
