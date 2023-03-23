import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    constructor (private _http:HttpClient) {}

    getData() {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=76b7965329639ed602f04fdf6ee063c9');
    }
}