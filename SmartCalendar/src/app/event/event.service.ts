import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { EventComponent } from './event.component';


@Injectable()
export class EventService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent() {
    // Create element
    const popup = document.createElement('event-creator');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(EventComponent);
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

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement() {
    // Create element
    const popupEl: NgElement & WithProperties<EventComponent> = document.createElement('event-creator') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}