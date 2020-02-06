/**
 * @fileoverview added by tsickle
 * Generated from: lib/ace-calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class AceCalendarComponent {
    constructor() {
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.pickedDate = 0;
        this.aux = 0;
        // tslint:disable-next-line:no-output-on-prefix
        this.onDatePicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    populateDates() {
        this.daysElement.innerHTML = '';
        /** @type {?} */
        let amountDays = 31;
        /** @type {?} */
        let start = '';
        /** @type {?} */
        const m = this.month + 1;
        if (this.month === 1) {
            amountDays = 28;
            if ((this.year % 4) === 0) {
                amountDays = 29;
            }
        }
        start = '0' + m + '/' + '01/' + this.year;
        /** @type {?} */
        const s = new Date(start);
        /** @type {?} */
        const tab = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        /** @type {?} */
        const dayName = tab[s.getDay()];
        /** @type {?} */
        const d = new Date(start);
        /** @type {?} */
        const dayNames = d.toString().split(' ')[0];
        /** @type {?} */
        let counter = s.getDay() - 1;
        if (s.getDay() === 0) {
            counter = 6;
        }
        for (let i = 0; i < counter; i++) {
            /** @type {?} */
            let dayElementEmpty;
            dayElementEmpty = document.createElement('div');
            dayElementEmpty.classList.add('day');
            dayElementEmpty.textContent = ' ';
            this.daysElement.appendChild(dayElementEmpty);
        }
        for (let i = 0; i < amountDays; i++) {
            /** @type {?} */
            let dayElement;
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
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.test = event.currentTarget;
        /** @type {?} */
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
        /** @type {?} */
        let x = this.month + 1;
        if (x < 10) {
            x = '0' + x;
        }
        /** @type {?} */
        const dd = numbr + '/' + (x) + '/' + this.year;
        this.selectedDateElement.textContent = dd;
        this.getDate = dd;
        //console.log('the selected date is ', this.getDate);
        this.onDatePicked.emit(this.getDate);
    }
    /**
     * @param {?} d
     * @return {?}
     */
    formatDate(d) {
        /** @type {?} */
        let day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        /** @type {?} */
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        this.year = d.getFullYear();
        return day + ' / ' + month + ' / ' + this.year;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    openCalendar(e) {
        this.toggleDatePicker(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    toggleDatePicker(e) {
        if (!this.checkEventPathForClass(e.path, 'dates')) {
            this.datesElement.classList.toggle('active');
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToNextMonth(e) {
        this.month++;
        if (this.month > 11) {
            this.month = 0;
            this.year++;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToPrevMonth(e) {
        this.month--;
        if (this.month < 0) {
            this.month = 11;
            this.year--;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    }
    /**
     * @return {?}
     */
    onNextMonth() {
        this.month++;
        if (this.month > 11) {
            this.month = 0;
            this.year++;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    }
    /**
     * @return {?}
     */
    getDays() {
        /** @type {?} */
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
            /** @type {?} */
            let dayElement;
            dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = days[i];
            this.dateName.appendChild(dayElement);
        }
    }
    /**
     * @return {?}
     */
    wishedDate() {
        this.onDatePicked.emit(this.getDate);
        console.log('the selected date is ', this.getDate);
    }
    // HELPER FUNCTIONS
    /**
     * @param {?} path
     * @param {?} selector
     * @return {?}
     */
    checkEventPathForClass(path, selector) {
        // tslint:disable-next-line:indent
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < path.length; i++) {
            if (path[i].classList && path[i].classList.contains(selector)) {
                return true;
            }
        }
        return false;
    }
}
AceCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ace-calendar',
                template: "<h1>ANGULAR DATEPICKER</h1>\r\n\r\n<div class=\"date-picker\" (click)=\"openCalendar($event)\">\r\n    <img class=\"date-img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTijtjH-UkifX_W-g5J1egLzkpN1DZGY7qxvFdriyhUQ_UelgT-\">\r\n    <div class=\"year-box\">\r\n            <div class=\"selected-date\">\r\n            </div>\r\n    </div>\r\n    <div class=\"dates\">\r\n        <div class=\"month\">\r\n            <div class=\"arrows prev-mth\"(click)=\"goToPrevMonth($event)\">&lt;</div>\r\n            <div class=\"mth\"></div>\r\n            <div class=\"arrows next-mth\" (click)=\"goToNextMonth($event)\">&gt;</div>\r\n        </div>\r\n        <div class=\"days-names\"></div>\r\n        <div class=\"days\"></div>\r\n    </div>\r\n</div>",
                styles: ["*{margin:0;padding:0;box-sizing:border-box}body{background-color:#ffce00;font-family:Saira,Arial,Helvetica,sans-serif}h1{margin:30px 0;color:#313131;font-size:42px;font-weight:900;text-align:center}h1 span{font-weight:300}.date-picker{position:relative;width:100%;max-width:320px;height:auto;background-color:#fff;margin:30px auto;box-shadow:0 3px 10px rgba(0,0,0,.2);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;padding:15px}.date-picker .selected-date{color:#313131;font-size:28px}.date-picker .dates{display:none;position:absolute;top:100%;left:0;right:0;margin-bottom:30px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.date-picker .dates.active{display:block;margin-top:5px}.date-picker .dates .month{display:flex;justify-content:space-between;align-items:center;height:55px;background:#38d7e7;margin:12px;border-radius:30px}.date-picker .dates .month .arrows{width:35px;height:30px;color:#313131;font-size:20px}.date-picker .dates .month .arrows:active,.date-picker .dates .month .arrows:hover{color:#f9f7f1}.date-picker .dates .days{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:auto;grid-row-gap:38px;grid-column-gap:7px;padding-bottom:4px}.date-picker .dates .days .day.selected{background-color:#00ca85}.date-picker .days-names{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:40px;color:#ee316b;font-weight:700}.mth{font-weight:600;letter-spacing:3px}.date-picker .years{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);-ms-grid-rows:(1fr)[3];grid-template-rows:repeat(3,1fr);width:100%;height:300px;position:absolute;z-index:10;margin-bottom:30px}.date-picker .years.inactive{display:none}.date-picker .years.active{display:-ms-grid;display:grid}.mouse{background:#ff0}.date-img{width:14%;float:left}"]
            }] }
];
/** @nocollapse */
AceCalendarComponent.ctorParameters = () => [];
AceCalendarComponent.propDecorators = {
    onDatePicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AceCalendarComponent.prototype.datePickerElement;
    /** @type {?} */
    AceCalendarComponent.prototype.selectedDateElement;
    /** @type {?} */
    AceCalendarComponent.prototype.datesElement;
    /** @type {?} */
    AceCalendarComponent.prototype.mthElement;
    /** @type {?} */
    AceCalendarComponent.prototype.nextMthElement;
    /** @type {?} */
    AceCalendarComponent.prototype.prevMthElement;
    /** @type {?} */
    AceCalendarComponent.prototype.daysElement;
    /** @type {?} */
    AceCalendarComponent.prototype.months;
    /** @type {?} */
    AceCalendarComponent.prototype.date;
    /** @type {?} */
    AceCalendarComponent.prototype.day;
    /** @type {?} */
    AceCalendarComponent.prototype.month;
    /** @type {?} */
    AceCalendarComponent.prototype.year;
    /** @type {?} */
    AceCalendarComponent.prototype.selectedDate;
    /** @type {?} */
    AceCalendarComponent.prototype.selectedDay;
    /** @type {?} */
    AceCalendarComponent.prototype.selectedMonth;
    /** @type {?} */
    AceCalendarComponent.prototype.selectedYear;
    /** @type {?} */
    AceCalendarComponent.prototype.dateName;
    /** @type {?} */
    AceCalendarComponent.prototype.pickedDate;
    /** @type {?} */
    AceCalendarComponent.prototype.aux;
    /** @type {?} */
    AceCalendarComponent.prototype.test;
    /** @type {?} */
    AceCalendarComponent.prototype.tt;
    /** @type {?} */
    AceCalendarComponent.prototype.yearsElement;
    /** @type {?} */
    AceCalendarComponent.prototype.getDate;
    /** @type {?} */
    AceCalendarComponent.prototype.onDatePicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjZS1jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9hY2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sb0JBQW9CO0lBMEIvQjtRQWxCQSxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBVXBJLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQUcsQ0FBQyxDQUFDOztRQU1FLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMs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SUFDWCxvQ0FBVTs7SUFDViw0Q0FBa0I7O0lBQ2xCLDJDQUFpQjs7SUFDakIsNkNBQW1COztJQUNuQiw0Q0FBa0I7O0lBQ2xCLHdDQUFjOztJQUNkLDBDQUFlOztJQUNmLG1DQUFROztJQUNSLG9DQUFVOztJQUNWLGtDQUFROztJQUNSLDRDQUFrQjs7SUFDbEIsdUNBQWE7O0lBRWIsNENBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWNlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjZS1jYWxlbmRhci5jYWxlbmRhci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNlLWNhbGVuZGFyLmNhbGVuZGFyLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2VDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGVQaWNrZXJFbGVtZW50OiBhbnk7XG4gIHNlbGVjdGVkRGF0ZUVsZW1lbnQ6IGFueTtcbiAgZGF0ZXNFbGVtZW50OiBhbnk7XG4gIG10aEVsZW1lbnQ6IGFueTtcbiAgbmV4dE10aEVsZW1lbnQ6IGFueTtcbiAgcHJldk10aEVsZW1lbnQ6IGFueTtcbiAgZGF5c0VsZW1lbnQ6IGFueTtcbiAgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4gIGRhdGU6IGFueTtcbiAgZGF5OiBhbnk7XG4gIG1vbnRoOiBhbnk7XG4gIHllYXI6IGFueTtcbiAgc2VsZWN0ZWREYXRlOiBhbnk7XG4gIHNlbGVjdGVkRGF5OiBhbnk7XG4gIHNlbGVjdGVkTW9udGg6IGFueTtcbiAgc2VsZWN0ZWRZZWFyOiBhbnk7XG4gIGRhdGVOYW1lOiBhbnk7XG4gIHBpY2tlZERhdGUgPSAwO1xuICBhdXggPSAwO1xuICB0ZXN0OiBhbnk7XG4gIHR0OiBhbnk7XG4gIHllYXJzRWxlbWVudDogYW55O1xuICBnZXREYXRlOiBhbnk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkRhdGVQaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlcicpO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlciAuc2VsZWN0ZWQtZGF0ZScpO1xuICAgIHRoaXMuZGF0ZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyIC5kYXRlcycpO1xuICAgIHRoaXMubXRoRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlciAuZGF0ZXMgLm1vbnRoIC5tdGgnKTtcbiAgICB0aGlzLm5leHRNdGhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyIC5kYXRlcyAubW9udGggLm5leHQtbXRoJyk7XG4gICAgdGhpcy5wcmV2TXRoRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlciAuZGF0ZXMgLm1vbnRoIC5wcmV2LW10aCcpO1xuICAgIHRoaXMuZGF5c0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1waWNrZXIgLmRhdGVzIC5kYXlzJyk7XG4gICAgdGhpcy55ZWFyc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1waWNrZXIgLnllYXJzJyk7XG4gICAgdGhpcy5kYXRlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLW5hbWVzJyk7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmRheSA9IHRoaXMuZGF0ZS5nZXREYXRlKCk7XG4gICAgdGhpcy5tb250aCA9IHRoaXMuZGF0ZS5nZXRNb250aCgpO1xuICAgIHRoaXMueWVhciA9IHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5kYXRlO1xuICAgIHRoaXMuc2VsZWN0ZWREYXkgPSB0aGlzLmRheTtcbiAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLm1vbnRoO1xuICAgIHRoaXMuc2VsZWN0ZWRZZWFyID0gdGhpcy55ZWFyO1xuICAgIHRoaXMubXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubW9udGhzW3RoaXMubW9udGhdICsgJyAnICsgdGhpcy55ZWFyO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUpO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlRWxlbWVudC5kYXRhc2V0LnZhbHVlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgdGhpcy5wb3B1bGF0ZURhdGVzKCk7XG4gICAgdGhpcy5nZXREYXlzKCk7XG4gIH1cbiAgcG9wdWxhdGVEYXRlcygpIHtcbiAgICB0aGlzLmRheXNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBhbW91bnREYXlzID0gMzE7XG4gICAgbGV0IHN0YXJ0ID0gJyc7XG4gICAgY29uc3QgbSA9IHRoaXMubW9udGggKyAxO1xuICAgIGlmICh0aGlzLm1vbnRoID09PSAxKSB7XG4gICAgICBhbW91bnREYXlzID0gMjg7XG4gICAgICBpZiAoKHRoaXMueWVhciAlIDQpID09PSAwKSB7XG4gICAgICAgIGFtb3VudERheXMgPSAyOTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgPSAnMCcgKyBtICsgJy8nICsgJzAxLycgICsgdGhpcy55ZWFyO1xuICAgIGNvbnN0IHMgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgY29uc3QgdGFiID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRheU5hbWUgPSB0YWJbcy5nZXREYXkoKV07XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBjb25zdCBkYXlOYW1lcyA9IGQudG9TdHJpbmcoKS5zcGxpdCgnICcpWzBdO1xuICAgIGxldCBjb3VudGVyID0gcy5nZXREYXkoKSAtIDE7XG4gICAgaWYgKHMuZ2V0RGF5KCkgPT09IDApIHtcbiAgICAgIGNvdW50ZXIgPSA2O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgIGNvdW50ZXI7IGkrKykge1xuICAgICAgbGV0IGRheUVsZW1lbnRFbXB0eTogYW55O1xuICAgICAgZGF5RWxlbWVudEVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlFbGVtZW50RW1wdHkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICBkYXlFbGVtZW50RW1wdHkudGV4dENvbnRlbnQgPSAnICc7XG4gICAgICB0aGlzLmRheXNFbGVtZW50LmFwcGVuZENoaWxkKGRheUVsZW1lbnRFbXB0eSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50RGF5czsgaSsrKSB7XG4gICAgICBsZXQgZGF5RWxlbWVudDogYW55O1xuICAgICAgZGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXkgPT09IChpICsgMSkgJiYgdGhpcy5zZWxlY3RlZFllYXIgPT09IHRoaXMueWVhciAmJiB0aGlzLnNlbGVjdGVkTW9udGggPT09IHRoaXMubW9udGgpIHtcbiAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgZGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5waWNrZWREYXRlID0gdGhpcy5hdXg7XG4gICAgICB0aGlzLmRheXNFbGVtZW50LmFwcGVuZENoaWxkKGRheUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrKCBldmVudCApIHtcbiAgICB0aGlzLnRlc3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGxldCBudW1iciA9IHRoaXMudGVzdC50ZXh0Q29udGVudDtcblxuICAgIGlmICh0aGlzLnBpY2tlZERhdGUgIT09IHRoaXMuYXV4KSB7XG4gICAgICB0aGlzLnR0LnN0eWxlLmJvcmRlclJhZGl1cyA9ICdub25lJztcbiAgICAgIHRoaXMudHQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XG4gICAgICB0aGlzLnR0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICB9XG4gICAgdGhpcy5hdXgrKztcbiAgICB0aGlzLnRlc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZTMxNmInO1xuICAgIHRoaXMudGVzdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICB0aGlzLnRlc3Quc3R5bGUuY29sb3IgPSAnI2ZmZic7XG4gICAgdGhpcy50dCA9IHRoaXMudGVzdDtcbiAgICBpZiAobnVtYnIgPCAxMCkge1xuICAgICAgbnVtYnIgPSAnMCcgKyBudW1icjtcbiAgICB9XG4gICAgbGV0IHggPSB0aGlzLm1vbnRoICsgMTtcbiAgICBpZiAoeCA8IDEwKSB7XG4gICAgICB4ID0gJzAnICsgeDtcbiAgICB9XG4gICAgY29uc3QgZGQgPSAgbnVtYnIgKyAnLycgKyAoeCkgKyAnLycgKyB0aGlzLnllYXI7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZGQ7XG4gICAgdGhpcy5nZXREYXRlID0gZGQ7XG4gICAgLy9jb25zb2xlLmxvZygndGhlIHNlbGVjdGVkIGRhdGUgaXMgJywgdGhpcy5nZXREYXRlKTtcbiAgICB0aGlzLm9uRGF0ZVBpY2tlZC5lbWl0KHRoaXMuZ2V0RGF0ZSk7XG4gIH1cbiAgZm9ybWF0RGF0ZShkKSB7XG4gICAgbGV0IGRheSA9IGQuZ2V0RGF0ZSgpO1xuICAgIGlmIChkYXkgPCAxMCkge1xuICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgIH1cbiAgICBsZXQgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xuICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgIH1cbiAgICB0aGlzLnllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGRheSArICcgLyAnICsgbW9udGggKyAnIC8gJyArIHRoaXMueWVhcjtcbiAgfVxuICBvcGVuQ2FsZW5kYXIoZSkge1xuICAgIHRoaXMudG9nZ2xlRGF0ZVBpY2tlcihlKTtcbiAgfVxuICB0b2dnbGVEYXRlUGlja2VyKGUpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tFdmVudFBhdGhGb3JDbGFzcyhlLnBhdGgsICdkYXRlcycpKSB7XG4gICAgICB0aGlzLmRhdGVzRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbiAgZ29Ub05leHRNb250aChlKSB7XG4gICAgdGhpcy5tb250aCsrO1xuICAgIGlmICh0aGlzLm1vbnRoID4gMTEpIHtcbiAgICAgIHRoaXMubW9udGggPSAwO1xuICAgICAgdGhpcy55ZWFyKys7XG4gICAgfVxuICAgIHRoaXMubXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubW9udGhzW3RoaXMubW9udGhdICsgJyAnICsgdGhpcy55ZWFyO1xuICAgIHRoaXMucG9wdWxhdGVEYXRlcygpO1xuICB9XG4gIGdvVG9QcmV2TW9udGgoZSkge1xuICAgIHRoaXMubW9udGgtLTtcbiAgICBpZiAodGhpcy5tb250aCA8IDApIHtcbiAgICAgIHRoaXMubW9udGggPSAxMTtcbiAgICAgIHRoaXMueWVhci0tO1xuICAgIH1cbiAgICB0aGlzLm10aEVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLm1vbnRoc1t0aGlzLm1vbnRoXSArICcgJyArIHRoaXMueWVhcjtcbiAgICB0aGlzLnBvcHVsYXRlRGF0ZXMoKTtcbiAgfVxuXG4gIG9uTmV4dE1vbnRoKCkge1xuICAgIHRoaXMubW9udGgrKztcbiAgICBpZiAodGhpcy5tb250aCA+IDExKSB7XG4gICAgICB0aGlzLm1vbnRoID0gMDtcbiAgICAgIHRoaXMueWVhcisrO1xuICAgIH1cbiAgICB0aGlzLm10aEVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLm1vbnRoc1t0aGlzLm1vbnRoXSArICcgJyArIHRoaXMueWVhcjtcbiAgICB0aGlzLnBvcHVsYXRlRGF0ZXMoKTtcbiAgfVxuICBnZXREYXlzKCkge1xuICAgIGNvbnN0IGRheXMgPSBbXG4gICAgICAnTW9uJyxcbiAgICAgICdUdWUnLFxuICAgICAgJ1dlZCcsXG4gICAgICAnVGh1JyxcbiAgICAgICdGcmknLFxuICAgICAgJ1NhdCcsXG4gICAgICAnU3VuJ1xuICAgIF07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXlFbGVtZW50OiBhbnk7XG4gICAgICBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGRheXNbaV07XG4gICAgICB0aGlzLmRhdGVOYW1lLmFwcGVuZENoaWxkKGRheUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgd2lzaGVkRGF0ZSgpIHtcbiAgICB0aGlzLm9uRGF0ZVBpY2tlZC5lbWl0KHRoaXMuZ2V0RGF0ZSk7XG4gICAgY29uc29sZS5sb2coJ3RoZSBzZWxlY3RlZCBkYXRlIGlzICcsIHRoaXMuZ2V0RGF0ZSk7XG4gIH1cbiAgLy8gSEVMUEVSIEZVTkNUSU9OU1xuICBjaGVja0V2ZW50UGF0aEZvckNsYXNzKHBhdGgsIHNlbGVjdG9yKSB7XG5cdCAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmluZGVudFxuXHQgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG5cdCAgZm9yICggbGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKyApIHtcblx0ICAgXHRpZiAocGF0aFtpXS5jbGFzc0xpc3QgJiYgcGF0aFtpXS5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpKSB7XG5cdFx0ICBcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHQgIHJldHVybiBmYWxzZTtcbn1cbn1cbiJdfQ==