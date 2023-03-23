import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthCalendarComponent } from './calendar/monthly/monthcalendar.component';
import { CalendarHeaderComponent } from './calendar/header/calendarheader.component';
import { WeatherComponent } from './weather/weather.component';
import { EventComponent } from './event/event.component';
import { EventService } from './event/event.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MonthCalendarComponent,
    CalendarHeaderComponent,
    WeatherComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
