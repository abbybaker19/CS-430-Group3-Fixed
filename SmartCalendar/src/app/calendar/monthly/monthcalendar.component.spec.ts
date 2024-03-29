import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCalendarComponent } from './monthcalendar.component';

describe('MonthCalendarComponent', () => {
  let component: MonthCalendarComponent;
  let fixture: ComponentFixture<MonthCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
