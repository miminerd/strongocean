import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ace-calendar',
  templateUrl: './ace-calendar.calendar.html',
  styleUrls: ['./ace-calendar.calendar.scss']
})
export class AceCalendarComponent implements OnInit {
  datePickerElement: any;
  selectedDateElement: any;
  datesElement: any;
  mthElement: any;
  nextMthElement: any;
  prevMthElement: any;
  daysElement: any;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  date: any;
  day: any;
  month: any;
  year: any;
  selectedDate: any;
  selectedDay: any;
  selectedMonth: any;
  selectedYear: any;
  dateName: any;
  pickedDate = 0;
  aux = 0;
  test: any;
  tt: any;
  yearsElement: any;
  getDate: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.datePickerElement = document.querySelector('.date-picker');
    this.selectedDateElement = document.querySelector('.date-picker .selected-date');
    this.datesElement = document.querySelector('.date-picker .dates');
    this.mthElement = document.querySelector('.date-picker .dates .month .mth');
    this.nextMthElement = document.querySelector('.date-picker .dates .month .next-mth');
    this.prevMthElement = document.querySelector('.date-picker .dates .month .prev-mth');
    this.daysElement = document.querySelector('.date-picker .dates .days');
    this.yearsElement = document.querySelector('.date-picker .years');
    this.dateName = document.querySelector('.days-names');
    this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.selectedDate = this.date;
    this.selectedDay = this.day;
    this.selectedMonth = this.month;
    this.selectedYear = this.year;
    this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
    this.selectedDateElement.textContent = this.formatDate(this.date);
    this.selectedDateElement.dataset.value = this.selectedDate;
    this.populateDates();
    this.getDays();
  }
  populateDates() {
    this.daysElement.innerHTML = '';
    let amountDays = 31;
    let start = '';
    const m = this.month + 1;
    if (this.month === 1) {
      amountDays = 28;
      if ((this.year % 4) === 0) {
        amountDays = 29;
      }
    }
    start = '0' + m + '/' + '01/'  + this.year;
    const s = new Date(start);
    const tab = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = tab[s.getDay()];
    const d = new Date(start);
    const dayNames = d.toString().split(' ')[0];
    let counter = s.getDay() - 1;
    if (s.getDay() === 0) {
      counter = 6;
    }

    for (let i = 0; i <  counter; i++) {
      let dayElementEmpty: any;
      dayElementEmpty = document.createElement('div');
      dayElementEmpty.classList.add('day');
      dayElementEmpty.textContent = ' ';
      this.daysElement.appendChild(dayElementEmpty);
    }
    for (let i = 0; i < amountDays; i++) {
      let dayElement: any;
      dayElement = document.createElement('div');
      dayElement.textContent = i + 1;
      if (this.selectedDay === (i + 1) && this.selectedYear === this.year && this.selectedMonth === this.month) {
        dayElement.classList.add('selected');
      }
      dayElement.addEventListener('click', this.onClick.bind(this));

      this.pickedDate = this.aux;
      this.daysElement.appendChild(dayElement);
    }
  }
  onClick( event ) {
    this.test = event.currentTarget;
    let numbr = this.test.textContent;

    if (this.pickedDate !== this.aux) {
      this.tt.style.borderRadius = 'none';
      this.tt.style.color = '#000';
      this.tt.style.backgroundColor = '#fff';
    }
    this.aux++;
    this.test.style.backgroundColor = '#ee316b';
    this.test.style.borderRadius = '50%';
    this.test.style.color = '#fff';
    this.tt = this.test;
    if (numbr < 10) {
      numbr = '0' + numbr;
    }
    let x = this.month + 1;
    if (x < 10) {
      x = '0' + x;
    }
    const dd =  numbr + '/' + (x) + '/' + this.year;
    this.selectedDateElement.textContent = dd;
    this.getDate = dd;
    //console.log('the selected date is ', this.getDate);
    this.onDatePicked.emit(this.getDate);
  }
  formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    this.year = d.getFullYear();
    return day + ' / ' + month + ' / ' + this.year;
  }
  openCalendar(e) {
    this.toggleDatePicker(e);
  }
  toggleDatePicker(e) {
    if (!this.checkEventPathForClass(e.path, 'dates')) {
      this.datesElement.classList.toggle('active');
    }
  }
  goToNextMonth(e) {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
    this.populateDates();
  }
  goToPrevMonth(e) {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
    this.populateDates();
  }

  onNextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
    this.populateDates();
  }
  getDays() {
    const days = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < days.length; i++) {
      let dayElement: any;
      dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = days[i];
      this.dateName.appendChild(dayElement);
    }
  }
  public wishedDate() {
    this.onDatePicked.emit(this.getDate);
    console.log('the selected date is ', this.getDate);
  }
  // HELPER FUNCTIONS
  checkEventPathForClass(path, selector) {
	  // tslint:disable-next-line:indent
	  // tslint:disable-next-line:prefer-for-of
	  for ( let i = 0; i < path.length; i++ ) {
	   	if (path[i].classList && path[i].classList.contains(selector)) {
		  	return true;
		}
	}
	  return false;
}
}
