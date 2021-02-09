# Angular Date Picker Component

Reusable datepicker component for Angular apps [demo](https://angular-datepicker.herokuapp.com/).
![Alt text](/img/date.PNG?raw=true "datepicker")

## Installation

This project can be installed via npm 

`npm install ace-calendar --save`

Or via yarn:

`yarn add ace-calendar`

## Usage

How to use the datepicker component;\
integrate the component in your view (html) by simply adding this balise\

`<lib-ace-calendar (onDatePicked)="getDate($event)"></lib-ace-calendar>`

You can use onDatePicked event handler which fires each time you select a date. 

you can access the value of the selected date in your component.ts via the method:

  `public getDate(date: any): void {
    console.log('Picked date: ', date);
    return date;
  }`

Don't forget to add the ace-calendar module in your app.module.ts
<pre>
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
</pre>

## Contribution
I welcome issues and pull requests on https://github.com/miminerd/strongocean

## Author
[Juda Buchahda](https://juda-landing-cv.herokuapp.com/home)
-[Github](https://github.com/miminerd)