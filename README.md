# Angular Date Picker Component

Reusable datepicker component for Angular apps (demo).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Installation

This project can be installed via npm 

npm install ace-calendar --save

Or via yarn:

yarn add ace-calendar

## Configuration

How we use the datepicker component; to integrate the component in your view (html) simply add this balise

<lib-ace-calendar (onDatePicked)="getDate($event)"></lib-ace-calendar>

You can use onDatePicked event handler which fires each time you select a date. 

you can access the value of the selected date in your component.ts via the method:

  public getDate(date: any): void {
    console.log('Picked date: ', date);
    return date;
  }

  Here is a live demo:

