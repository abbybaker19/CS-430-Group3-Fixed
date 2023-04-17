import { Component, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { EventService } from './event/event.service';
import { Event } from './event/event';
import { CreateEventComponent } from './event/createevent.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = "title"
  static events: Event[] = [];


  constructor(injector: Injector,
     public eventService: EventService,
     public createEvent: CreateEventComponent) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(CreateEventComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {
      // Check if the response data is an array
      if (Array.isArray(data)) {
        AppComponent.events = data;
      } else {
        // If it's an object, assume it contains a single user object
        AppComponent.events = [data];
      }
    });
  }
}