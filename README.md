# Angular Date Picker Component

Reusable datepicker component for Angular apps [demo](https://angular-datepicker.herokuapp.com/).

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

[github repo](https://github.com/miminerd/strongocean).

## Contribution
I welcome issues and pull requests on https://github.com/miminerd/strongocean