import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthCalendarComponent } from './calendar/monthly/monthcalendar.component';
import { CalendarHeaderComponent } from './calendar/header/calendarheader.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateEventComponent } from './event/createevent.component';
import { EventService } from './event/event.service';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { DetailViewComponent } from './calendar/detail/detail-view/detail-view.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MonthCalendarComponent,
    CalendarHeaderComponent,
    WeatherComponent,
    CreateEventComponent, 
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
  providers: [EventService, CreateEventComponent, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
