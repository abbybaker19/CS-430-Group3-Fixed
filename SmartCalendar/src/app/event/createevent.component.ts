import { Component, EventEmitter, Injectable, HostBinding, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';

import { Event } from './event';
import { EventService } from './event.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'create-event-form',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css'],
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
})

@Injectable()
export class CreateEventComponent {

    constructor(private eventService: EventService,
                private datePipe: DatePipe) { }

    model = new Event(AppComponent.events.length, '', '', '', '');

    createEvent() {
        this.model.date=this.datePipe.transform(this.model.date, 'yyyy-MM-dd');
        // console.log(this.model.date)
        // console.log("creating event...");
        this.eventService.addEvent(this.model).subscribe(response => {
            console.log(response);
          });
    }

    reload() {
      // window.location.reload();
    }

    dragPosition = {x: 0, y: 0};

    changePosition() {
      this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y};
    }
  
    @HostBinding('@state')
    state: 'opened' | 'closed' = 'opened';
  
    @Output()
    closed = new EventEmitter<void>();
}