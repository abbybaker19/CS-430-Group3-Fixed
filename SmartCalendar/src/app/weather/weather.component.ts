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

  ngOnInit(){
    this._weatherService.getData().subscribe(res=>{
      this.data = res;
      console.log(this.data);
    })
  }

}