import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { CreateEventComponent } from './createevent.component';

@Injectable()
export class EventService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private http: HttpClient) {}

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent() {
    // Create element
    const popup = document.createElement('create-event-form');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(CreateEventComponent);
    const eventComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(eventComponentRef.hostView);

    // Listen to the close event
    eventComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(eventComponentRef.hostView);
    });

    // Add to the DOM
    document.body.appendChild(popup);
  }

  ///////////////////////
  //
  //  BACKEND SERVICES
  //
  ///////////////////////

  private apiUrl = 'http://localhost:3000';

  getEvents() {
    return this.http.get(`${this.apiUrl}/get-event`, {responseType: 'json'});
  }

  addEvent(event: Event) {
    console.log("Inside event service");
    return this.http.post(`${this.apiUrl}/add-event`, event, {responseType: 'json'});
  }
}