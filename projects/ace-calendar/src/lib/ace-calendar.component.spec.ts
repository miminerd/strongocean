import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceCalendarComponent } from './ace-calendar.component';

describe('AceCalendarComponent', () => {
  let component: AceCalendarComponent;
  let fixture: ComponentFixture<AceCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
