import { Component, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { EventComponent } from './event/event.component';
import { EventService } from './event/event.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "title"

  constructor(injector: Injector, public popup: EventService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(EventComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}