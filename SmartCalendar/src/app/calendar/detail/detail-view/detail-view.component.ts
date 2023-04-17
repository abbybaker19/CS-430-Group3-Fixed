import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/event/event';
import { EventService } from 'src/app/event/event.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit{
  // @Input() temp: string;
  // @Input() description: string;
  // @Input() id: string;
  // @Input() month: string;
  // @Input() year: string;
  // @Input() date: string;
  @Input() events: Event[];


  constructor(public eventService: EventService){
    this.events = [];
  }

  printData(){
    // console.log(this.id);
    // console.log(this.month);
    // console.log(this.year);
    // console.log(this.date)
  }

  ngOnInit(): void {
  }
}
