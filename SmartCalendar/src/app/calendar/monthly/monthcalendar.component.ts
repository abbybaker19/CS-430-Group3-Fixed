import { Component } from '@angular/core';
import { Day } from '../day';
import { Week, Weeks } from '../week';
import { EventService } from 'src/app/event/event.service';
import { DatePipe } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { Event } from 'src/app/event/event';

export interface Days extends Array<Day> {}
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

@Component({
  selector: 'calendar-monthly',
  templateUrl: 'monthcalendar.component.html',
  styleUrls: ['monthcalendar.component.css']
})

export class MonthCalendarComponent {

  constructor(public eventService: EventService,
    private datePipe: DatePipe) {}

  date = new Date();

  year = this.date.getFullYear();
  month = this.date.getMonth();

  calendar = this.generateMonth(this.year, this.month);

  monthName = monthNames[this.month];

  getMonth(month: number): number{
    return month + 1;
  }

  dateHasEvent(date: Date): boolean {
    for(let event of AppComponent.events){
      // console.log(event.date)
      // console.log("DATE: " + this.datePipe.transform(date, 'yyyy-MM-dd'))
      if(event.date == this.datePipe.transform(date, 'yyyy-MM-dd')){
        return true;
      }
    }
    return false;
  }

  getEvents(date: Date): Event[] {
    let events: Event[] = [];
    for(let event of AppComponent.events){
      // console.log("TEST")
      if(event.date == this.datePipe.transform(date, 'yyyy-MM-dd')){
        // console.log(event.date)
        events.push(event);
        // console.log(events)
      }
    }
    return events;
  }

  previousMonth(year: number, month: number): Weeks {
    this.date = new Date(year, month - 1);
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.monthName = monthNames[this.month];
    this.calendar = this.generateMonth(this.year, this.month);
    return this.calendar;
  }

  nextMonth(year: number, month: number): Weeks {
    this.date = new Date(year, month + 1);
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.monthName = monthNames[this.month];
    this.calendar = this.generateMonth(this.year, this.month);
    return this.calendar;
  }

  daysInMonth(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  generateMonth(year: number, month: number): Weeks {
    let weeks: Weeks = [];

    let firstDay = (new Date(year, month)).getDay();

    let date = 1;
    for (let i = 0; i < 5; i++) {
      let week: Week = {
        days: []
      }

      let daysInPreviousMonth = this.daysInMonth(year, month-1);
      let k = daysInPreviousMonth - firstDay + 1;
      
      let daysInNextMonth = 1;

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
            let day: Day = {
              date: new Date(year, month-1, k),
              events: [
                {
                  id: -1,
                  name: "",
                  date: "",
                  time: "",
                  location: ""
                }
              ]
            };
            week.days.push(day);
            k++;
          }
        else if (date > this.daysInMonth(year, month)) {
          let day: Day = {
            date: new Date(year, month, daysInNextMonth),
            events: [
              {
                id: -1,
                name: "",
                date: "",
                time: "",
                location: ""
              }
            ]
          };
          daysInNextMonth++;
          week.days.push(day);
        }

        else {
          let day: Day = {
            date: new Date(year, month, date),
            events: [
              {
                id: -1,
                name: "",
                date: "",
                time: "",
                location: ""
              }
            ]
          };
          week.days.push(day);
          date++;
        }
      }
      weeks.push(week);
    }

    return weeks;
  }
}