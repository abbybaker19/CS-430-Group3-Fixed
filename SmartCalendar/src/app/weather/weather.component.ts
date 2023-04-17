import { Component } from '@angular/core';
import { WeatherService } from './service/weather';

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css']
})

export class WeatherComponent {
  constructor(private _weatherService: WeatherService){}

  data:any;

  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        d = new Date();
        day = this.weekday[this.d.getDay()];
        day2 = this.weekday[this.d.getDay() + 1];
        day3 = this.weekday[this.d.getDay() + 2];
        day4 = this.weekday[this.d.getDay() + 3];
        day5 = this.weekday[this.d.getDay() + 4];


  ngOnInit(){
    this._weatherService.getData().subscribe(res=>{
      this.data = res;
      console.log(this.data);
    })
  }

}