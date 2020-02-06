import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ace-calendar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AceCalendarService {
    constructor() { }
}
AceCalendarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AceCalendarService.ctorParameters = () => [];
/** @nocollapse */ AceCalendarService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AceCalendarService_Factory() { return new AceCalendarService(); }, token: AceCalendarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ace-calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AceCalendarComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ace-calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AceCalendarModule {
}
AceCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AceCalendarComponent],
                imports: [],
                exports: [AceCalendarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ace-calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AceCalendarComponent, AceCalendarModule, AceCalendarService };
//# sourceMappingURL=ace-calendar.js.map
