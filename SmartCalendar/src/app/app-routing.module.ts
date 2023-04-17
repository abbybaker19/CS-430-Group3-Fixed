import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthCalendarComponent } from './calendar/monthly/monthcalendar.component';
import { DetailViewComponent } from './calendar/detail/detail-view/detail-view.component';

const routes: Routes = [
  {path: 'calendar', component: MonthCalendarComponent},
  {path: 'details', component: DetailViewComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
