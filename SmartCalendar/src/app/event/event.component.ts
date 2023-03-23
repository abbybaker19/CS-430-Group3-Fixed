import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css'],
})

export class EventComponent {

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