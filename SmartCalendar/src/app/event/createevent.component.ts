import { Component, EventEmitter, Injectable, HostBinding, Input, Output } from '@angular/core';

import { Event } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'create-event-form',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})

@Injectable()
export class CreateEventComponent {

    constructor(private eventService: EventService) { }

    model = new Event('', '', '', '');

    submitted = false;

    onSubmit() { this.submitted = false; }

    createEvent() {
        console.log("creating event...");
        this.eventService.addEvent(this.model).subscribe(response => {
            console.log(response);
          });
    }

    closeEventCreation() {
      console.log('CLOSED');
      this.state = 'closed';
    }

    dragPosition = {x: 0, y: 0};

    changePosition() {
      this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y};
    }
  
    @HostBinding('@state')
    state: 'opened' | 'closed' = 'closed';
  
    @Input()
    get message(): string { return this._message; }
    set message(message: string) {
      this._message = message;
      this.state = 'opened';
    }
    private _message = '';
  
    @Output()
    closed = new EventEmitter<void>();
}