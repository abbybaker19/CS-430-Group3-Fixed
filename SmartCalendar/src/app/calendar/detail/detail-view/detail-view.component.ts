import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit{
  @Input() temp: string;
  @Input() description: string;
  @Input() id: string;
  @Input() month: string;
  @Input() year: string;
  @Input() date: string;



  constructor(){
    this.temp = "null"
    this.month = "null"
    this.description = "null"
    this.id = "null"
    this.year = "null"
    this.date = "null"
  }

  printData(){
    console.log(this.id);
    console.log(this.month);
    console.log(this.year);
    console.log(this.date)
  }

  ngOnInit(): void {
  }
}
