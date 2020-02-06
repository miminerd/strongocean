/**
 * @fileoverview added by tsickle
 * Generated from: lib/ace-calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
var AceCalendarComponent = /** @class */ (function () {
    function AceCalendarComponent() {
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.pickedDate = 0;
        this.aux = 0;
        // tslint:disable-next-line:no-output-on-prefix
        this.onDatePicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AceCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AceCalendarComponent.prototype.populateDates = /**
     * @return {?}
     */
    function () {
        this.daysElement.innerHTML = '';
        /** @type {?} */
        var amountDays = 31;
        /** @type {?} */
        var start = '';
        /** @type {?} */
        var m = this.month + 1;
        if (this.month === 1) {
            amountDays = 28;
            if ((this.year % 4) === 0) {
                amountDays = 29;
            }
        }
        start = '0' + m + '/' + '01/' + this.year;
        /** @type {?} */
        var s = new Date(start);
        /** @type {?} */
        var tab = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        /** @type {?} */
        var dayName = tab[s.getDay()];
        /** @type {?} */
        var d = new Date(start);
        /** @type {?} */
        var dayNames = d.toString().split(' ')[0];
        /** @type {?} */
        var counter = s.getDay() - 1;
        if (s.getDay() === 0) {
            counter = 6;
        }
        for (var i = 0; i < counter; i++) {
            /** @type {?} */
            var dayElementEmpty = void 0;
            dayElementEmpty = document.createElement('div');
            dayElementEmpty.classList.add('day');
            dayElementEmpty.textContent = ' ';
            this.daysElement.appendChild(dayElementEmpty);
        }
        for (var i = 0; i < amountDays; i++) {
            /** @type {?} */
            var dayElement = void 0;
            dayElement = document.createElement('div');
            dayElement.textContent = i + 1;
            if (this.selectedDay === (i + 1) && this.selectedYear === this.year && this.selectedMonth === this.month) {
                dayElement.classList.add('selected');
            }
            dayElement.addEventListener('click', this.onClick.bind(this));
            this.pickedDate = this.aux;
            this.daysElement.appendChild(dayElement);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AceCalendarComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.test = event.currentTarget;
        /** @type {?} */
        var numbr = this.test.textContent;
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
        var x = this.month + 1;
        if (x < 10) {
            x = '0' + x;
        }
        /** @type {?} */
        var dd = numbr + '/' + (x) + '/' + this.year;
        this.selectedDateElement.textContent = dd;
        this.getDate = dd;
        //console.log('the selected date is ', this.getDate);
        this.onDatePicked.emit(this.getDate);
    };
    /**
     * @param {?} d
     * @return {?}
     */
    AceCalendarComponent.prototype.formatDate = /**
     * @param {?} d
     * @return {?}
     */
    function (d) {
        /** @type {?} */
        var day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        /** @type {?} */
        var month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        this.year = d.getFullYear();
        return day + ' / ' + month + ' / ' + this.year;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AceCalendarComponent.prototype.openCalendar = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.toggleDatePicker(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AceCalendarComponent.prototype.toggleDatePicker = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.checkEventPathForClass(e.path, 'dates')) {
            this.datesElement.classList.toggle('active');
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AceCalendarComponent.prototype.goToNextMonth = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.month++;
        if (this.month > 11) {
            this.month = 0;
            this.year++;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    AceCalendarComponent.prototype.goToPrevMonth = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.month--;
        if (this.month < 0) {
            this.month = 11;
            this.year--;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    };
    /**
     * @return {?}
     */
    AceCalendarComponent.prototype.onNextMonth = /**
     * @return {?}
     */
    function () {
        this.month++;
        if (this.month > 11) {
            this.month = 0;
            this.year++;
        }
        this.mthElement.textContent = this.months[this.month] + ' ' + this.year;
        this.populateDates();
    };
    /**
     * @return {?}
     */
    AceCalendarComponent.prototype.getDays = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var days = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < days.length; i++) {
            /** @type {?} */
            var dayElement = void 0;
            dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = days[i];
            this.dateName.appendChild(dayElement);
        }
    };
    /**
     * @return {?}
     */
    AceCalendarComponent.prototype.wishedDate = /**
     * @return {?}
     */
    function () {
        this.onDatePicked.emit(this.getDate);
        console.log('the selected date is ', this.getDate);
    };
    // HELPER FUNCTIONS
    // HELPER FUNCTIONS
    /**
     * @param {?} path
     * @param {?} selector
     * @return {?}
     */
    AceCalendarComponent.prototype.checkEventPathForClass = 
    // HELPER FUNCTIONS
    /**
     * @param {?} path
     * @param {?} selector
     * @return {?}
     */
    function (path, selector) {
        // tslint:disable-next-line:indent
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < path.length; i++) {
            if (path[i].classList && path[i].classList.contains(selector)) {
                return true;
            }
        }
        return false;
    };
    AceCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ace-calendar',
                    template: "<h1>ANGULAR DATEPICKER</h1>\r\n\r\n<div class=\"date-picker\" (click)=\"openCalendar($event)\">\r\n    <img class=\"date-img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTijtjH-UkifX_W-g5J1egLzkpN1DZGY7qxvFdriyhUQ_UelgT-\">\r\n    <div class=\"year-box\">\r\n            <div class=\"selected-date\">\r\n            </div>\r\n    </div>\r\n    <div class=\"dates\">\r\n        <div class=\"month\">\r\n            <div class=\"arrows prev-mth\"(click)=\"goToPrevMonth($event)\">&lt;</div>\r\n            <div class=\"mth\"></div>\r\n            <div class=\"arrows next-mth\" (click)=\"goToNextMonth($event)\">&gt;</div>\r\n        </div>\r\n        <div class=\"days-names\"></div>\r\n        <div class=\"days\"></div>\r\n    </div>\r\n</div>",
                    styles: ["*{margin:0;padding:0;box-sizing:border-box}body{background-color:#ffce00;font-family:Saira,Arial,Helvetica,sans-serif}h1{margin:30px 0;color:#313131;font-size:42px;font-weight:900;text-align:center}h1 span{font-weight:300}.date-picker{position:relative;width:100%;max-width:320px;height:auto;background-color:#fff;margin:30px auto;box-shadow:0 3px 10px rgba(0,0,0,.2);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;padding:15px}.date-picker .selected-date{color:#313131;font-size:28px}.date-picker .dates{display:none;position:absolute;top:100%;left:0;right:0;margin-bottom:30px;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.date-picker .dates.active{display:block;margin-top:5px}.date-picker .dates .month{display:flex;justify-content:space-between;align-items:center;height:55px;background:#38d7e7;margin:12px;border-radius:30px}.date-picker .dates .month .arrows{width:35px;height:30px;color:#313131;font-size:20px}.date-picker .dates .month .arrows:active,.date-picker .dates .month .arrows:hover{color:#f9f7f1}.date-picker .dates .days{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:auto;grid-row-gap:38px;grid-column-gap:7px;padding-bottom:4px}.date-picker .dates .days .day.selected{background-color:#00ca85}.date-picker .days-names{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr);height:40px;color:#ee316b;font-weight:700}.mth{font-weight:600;letter-spacing:3px}.date-picker .years{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);-ms-grid-rows:(1fr)[3];grid-template-rows:repeat(3,1fr);width:100%;height:300px;position:absolute;z-index:10;margin-bottom:30px}.date-picker .years.inactive{display:none}.date-picker .years.active{display:-ms-grid;display:grid}.mouse{background:#ff0}.date-img{width:14%;float:left}"]
                }] }
    ];
    /** @nocollapse */
    AceCalendarComponent.ctorParameters = function () { return []; };
    AceCalendarComponent.propDecorators = {
        onDatePicked: [{ type: Output }]
    };
    return AceCalendarComponent;
}());
export { AceCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjZS1jYWxlbmRhci8iLCJzb3VyY2VzIjpbImxpYi9hY2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQStCRTtRQWxCQSxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBVXBJLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixRQUFHLEdBQUcsQ0FBQyxDQUFDOztRQU1FLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcs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TVksb0JBQW9COzs7SUFDL0IsaURBQXVCOztJQUN2QixtREFBeUI7O0lBQ3pCLDRDQUFrQjs7SUFDbEIsMENBQWdCOztJQUNoQiw4Q0FBb0I7O0lBQ3BCLDhDQUFvQjs7SUFDcEIsMkNBQWlCOztJQUNqQixzQ0FBb0k7O0lBQ3BJLG9DQUFVOztJQUNWLG1DQUFTOztJQUNULHFDQUFXOztJQUNYLG9DQUFVOztJQUNWLDRDQUFrQjs7SUFDbEIsMkNBQWlCOztJQUNqQiw2Q0FBbUI7O0lBQ25CLDRDQUFrQjs7SUFDbEIsd0NBQWM7O0lBQ2QsMENBQWU7O0lBQ2YsbUNBQVE7O0lBQ1Isb0NBQVU7O0lBQ1Ysa0NBQVE7O0lBQ1IsNENBQWtCOztJQUNsQix1Q0FBYTs7SUFFYiw0Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hY2UtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNlLWNhbGVuZGFyLmNhbGVuZGFyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2UtY2FsZW5kYXIuY2FsZW5kYXIuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjZUNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0ZVBpY2tlckVsZW1lbnQ6IGFueTtcbiAgc2VsZWN0ZWREYXRlRWxlbWVudDogYW55O1xuICBkYXRlc0VsZW1lbnQ6IGFueTtcbiAgbXRoRWxlbWVudDogYW55O1xuICBuZXh0TXRoRWxlbWVudDogYW55O1xuICBwcmV2TXRoRWxlbWVudDogYW55O1xuICBkYXlzRWxlbWVudDogYW55O1xuICBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbiAgZGF0ZTogYW55O1xuICBkYXk6IGFueTtcbiAgbW9udGg6IGFueTtcbiAgeWVhcjogYW55O1xuICBzZWxlY3RlZERhdGU6IGFueTtcbiAgc2VsZWN0ZWREYXk6IGFueTtcbiAgc2VsZWN0ZWRNb250aDogYW55O1xuICBzZWxlY3RlZFllYXI6IGFueTtcbiAgZGF0ZU5hbWU6IGFueTtcbiAgcGlja2VkRGF0ZSA9IDA7XG4gIGF1eCA9IDA7XG4gIHRlc3Q6IGFueTtcbiAgdHQ6IGFueTtcbiAgeWVhcnNFbGVtZW50OiBhbnk7XG4gIGdldERhdGU6IGFueTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRGF0ZVBpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyJyk7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyIC5zZWxlY3RlZC1kYXRlJyk7XG4gICAgdGhpcy5kYXRlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1waWNrZXIgLmRhdGVzJyk7XG4gICAgdGhpcy5tdGhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyIC5kYXRlcyAubW9udGggLm10aCcpO1xuICAgIHRoaXMubmV4dE10aEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1waWNrZXIgLmRhdGVzIC5tb250aCAubmV4dC1tdGgnKTtcbiAgICB0aGlzLnByZXZNdGhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyIC5kYXRlcyAubW9udGggLnByZXYtbXRoJyk7XG4gICAgdGhpcy5kYXlzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlciAuZGF0ZXMgLmRheXMnKTtcbiAgICB0aGlzLnllYXJzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlciAueWVhcnMnKTtcbiAgICB0aGlzLmRhdGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtbmFtZXMnKTtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZGF5ID0gdGhpcy5kYXRlLmdldERhdGUoKTtcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5kYXRlLmdldE1vbnRoKCk7XG4gICAgdGhpcy55ZWFyID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLmRhdGU7XG4gICAgdGhpcy5zZWxlY3RlZERheSA9IHRoaXMuZGF5O1xuICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMubW9udGg7XG4gICAgdGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnllYXI7XG4gICAgdGhpcy5tdGhFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5tb250aHNbdGhpcy5tb250aF0gKyAnICcgKyB0aGlzLnllYXI7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXREYXRlKHRoaXMuZGF0ZSk7XG4gICAgdGhpcy5zZWxlY3RlZERhdGVFbGVtZW50LmRhdGFzZXQudmFsdWUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB0aGlzLnBvcHVsYXRlRGF0ZXMoKTtcbiAgICB0aGlzLmdldERheXMoKTtcbiAgfVxuICBwb3B1bGF0ZURhdGVzKCkge1xuICAgIHRoaXMuZGF5c0VsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGFtb3VudERheXMgPSAzMTtcbiAgICBsZXQgc3RhcnQgPSAnJztcbiAgICBjb25zdCBtID0gdGhpcy5tb250aCArIDE7XG4gICAgaWYgKHRoaXMubW9udGggPT09IDEpIHtcbiAgICAgIGFtb3VudERheXMgPSAyODtcbiAgICAgIGlmICgodGhpcy55ZWFyICUgNCkgPT09IDApIHtcbiAgICAgICAgYW1vdW50RGF5cyA9IDI5O1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFydCA9ICcwJyArIG0gKyAnLycgKyAnMDEvJyAgKyB0aGlzLnllYXI7XG4gICAgY29uc3QgcyA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgICBjb25zdCB0YWIgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgY29uc3QgZGF5TmFtZSA9IHRhYltzLmdldERheSgpXTtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGNvbnN0IGRheU5hbWVzID0gZC50b1N0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgbGV0IGNvdW50ZXIgPSBzLmdldERheSgpIC0gMTtcbiAgICBpZiAocy5nZXREYXkoKSA9PT0gMCkge1xuICAgICAgY291bnRlciA9IDY7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAgY291bnRlcjsgaSsrKSB7XG4gICAgICBsZXQgZGF5RWxlbWVudEVtcHR5OiBhbnk7XG4gICAgICBkYXlFbGVtZW50RW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRheUVsZW1lbnRFbXB0eS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICAgIGRheUVsZW1lbnRFbXB0eS50ZXh0Q29udGVudCA9ICcgJztcbiAgICAgIHRoaXMuZGF5c0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudEVtcHR5KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnREYXlzOyBpKyspIHtcbiAgICAgIGxldCBkYXlFbGVtZW50OiBhbnk7XG4gICAgICBkYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlFbGVtZW50LnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERheSA9PT0gKGkgKyAxKSAmJiB0aGlzLnNlbGVjdGVkWWVhciA9PT0gdGhpcy55ZWFyICYmIHRoaXMuc2VsZWN0ZWRNb250aCA9PT0gdGhpcy5tb250aCkge1xuICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBkYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgICB0aGlzLnBpY2tlZERhdGUgPSB0aGlzLmF1eDtcbiAgICAgIHRoaXMuZGF5c0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2soIGV2ZW50ICkge1xuICAgIHRoaXMudGVzdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgbGV0IG51bWJyID0gdGhpcy50ZXN0LnRleHRDb250ZW50O1xuXG4gICAgaWYgKHRoaXMucGlja2VkRGF0ZSAhPT0gdGhpcy5hdXgpIHtcbiAgICAgIHRoaXMudHQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJ25vbmUnO1xuICAgICAgdGhpcy50dC5zdHlsZS5jb2xvciA9ICcjMDAwJztcbiAgICAgIHRoaXMudHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIH1cbiAgICB0aGlzLmF1eCsrO1xuICAgIHRoaXMudGVzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlMzE2Yic7XG4gICAgdGhpcy50ZXN0LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgIHRoaXMudGVzdC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICB0aGlzLnR0ID0gdGhpcy50ZXN0O1xuICAgIGlmIChudW1iciA8IDEwKSB7XG4gICAgICBudW1iciA9ICcwJyArIG51bWJyO1xuICAgIH1cbiAgICBsZXQgeCA9IHRoaXMubW9udGggKyAxO1xuICAgIGlmICh4IDwgMTApIHtcbiAgICAgIHggPSAnMCcgKyB4O1xuICAgIH1cbiAgICBjb25zdCBkZCA9ICBudW1iciArICcvJyArICh4KSArICcvJyArIHRoaXMueWVhcjtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkZDtcbiAgICB0aGlzLmdldERhdGUgPSBkZDtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGUgc2VsZWN0ZWQgZGF0ZSBpcyAnLCB0aGlzLmdldERhdGUpO1xuICAgIHRoaXMub25EYXRlUGlja2VkLmVtaXQodGhpcy5nZXREYXRlKTtcbiAgfVxuICBmb3JtYXREYXRlKGQpIHtcbiAgICBsZXQgZGF5ID0gZC5nZXREYXRlKCk7XG4gICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgfVxuICAgIGxldCBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7XG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XG4gICAgfVxuICAgIHRoaXMueWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gZGF5ICsgJyAvICcgKyBtb250aCArICcgLyAnICsgdGhpcy55ZWFyO1xuICB9XG4gIG9wZW5DYWxlbmRhcihlKSB7XG4gICAgdGhpcy50b2dnbGVEYXRlUGlja2VyKGUpO1xuICB9XG4gIHRvZ2dsZURhdGVQaWNrZXIoZSkge1xuICAgIGlmICghdGhpcy5jaGVja0V2ZW50UGF0aEZvckNsYXNzKGUucGF0aCwgJ2RhdGVzJykpIHtcbiAgICAgIHRoaXMuZGF0ZXNFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuICBnb1RvTmV4dE1vbnRoKGUpIHtcbiAgICB0aGlzLm1vbnRoKys7XG4gICAgaWYgKHRoaXMubW9udGggPiAxMSkge1xuICAgICAgdGhpcy5tb250aCA9IDA7XG4gICAgICB0aGlzLnllYXIrKztcbiAgICB9XG4gICAgdGhpcy5tdGhFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5tb250aHNbdGhpcy5tb250aF0gKyAnICcgKyB0aGlzLnllYXI7XG4gICAgdGhpcy5wb3B1bGF0ZURhdGVzKCk7XG4gIH1cbiAgZ29Ub1ByZXZNb250aChlKSB7XG4gICAgdGhpcy5tb250aC0tO1xuICAgIGlmICh0aGlzLm1vbnRoIDwgMCkge1xuICAgICAgdGhpcy5tb250aCA9IDExO1xuICAgICAgdGhpcy55ZWFyLS07XG4gICAgfVxuICAgIHRoaXMubXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubW9udGhzW3RoaXMubW9udGhdICsgJyAnICsgdGhpcy55ZWFyO1xuICAgIHRoaXMucG9wdWxhdGVEYXRlcygpO1xuICB9XG5cbiAgb25OZXh0TW9udGgoKSB7XG4gICAgdGhpcy5tb250aCsrO1xuICAgIGlmICh0aGlzLm1vbnRoID4gMTEpIHtcbiAgICAgIHRoaXMubW9udGggPSAwO1xuICAgICAgdGhpcy55ZWFyKys7XG4gICAgfVxuICAgIHRoaXMubXRoRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubW9udGhzW3RoaXMubW9udGhdICsgJyAnICsgdGhpcy55ZWFyO1xuICAgIHRoaXMucG9wdWxhdGVEYXRlcygpO1xuICB9XG4gIGdldERheXMoKSB7XG4gICAgY29uc3QgZGF5cyA9IFtcbiAgICAgICdNb24nLFxuICAgICAgJ1R1ZScsXG4gICAgICAnV2VkJyxcbiAgICAgICdUaHUnLFxuICAgICAgJ0ZyaScsXG4gICAgICAnU2F0JyxcbiAgICAgICdTdW4nXG4gICAgXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRheUVsZW1lbnQ6IGFueTtcbiAgICAgIGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICBkYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF5c1tpXTtcbiAgICAgIHRoaXMuZGF0ZU5hbWUuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyB3aXNoZWREYXRlKCkge1xuICAgIHRoaXMub25EYXRlUGlja2VkLmVtaXQodGhpcy5nZXREYXRlKTtcbiAgICBjb25zb2xlLmxvZygndGhlIHNlbGVjdGVkIGRhdGUgaXMgJywgdGhpcy5nZXREYXRlKTtcbiAgfVxuICAvLyBIRUxQRVIgRlVOQ1RJT05TXG4gIGNoZWNrRXZlbnRQYXRoRm9yQ2xhc3MocGF0aCwgc2VsZWN0b3IpIHtcblx0ICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW5kZW50XG5cdCAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2Zcblx0ICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrICkge1xuXHQgICBcdGlmIChwYXRoW2ldLmNsYXNzTGlzdCAmJiBwYXRoW2ldLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikpIHtcblx0XHQgIFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdCAgcmV0dXJuIGZhbHNlO1xufVxufVxuIl19