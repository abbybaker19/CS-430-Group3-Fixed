import { Component } from '@angular/core';
import { Day } from '../day';
import { Week, Weeks } from '../week';

export interface Days extends Array<Day> {}
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

@Component({
  selector: 'calendar-monthly',
  templateUrl: 'monthcalendar.component.html',
  styleUrls: ['monthcalendar.component.css']
})

export class MonthCalendarComponent {

  date = new Date();

  year = this.date.getFullYear();
  month = this.date.getMonth();

  calendar = this.generateMonth(this.year, this.month);

  monthName = monthNames[this.month];

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