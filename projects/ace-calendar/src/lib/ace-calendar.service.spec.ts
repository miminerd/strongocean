import { TestBed } from '@angular/core/testing';

import { AceCalendarService } from './ace-calendar.service';

describe('AceCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AceCalendarService = TestBed.get(AceCalendarService);
    expect(service).toBeTruthy();
  });
});
