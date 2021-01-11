import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { EventbarComponent } from './eventbar/eventbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DayviewComponent } from './dayview/dayview.component';
import { WeekviewComponent } from './weekview/weekview.component';
import { MonthviewComponent } from './monthview/monthview.component';
import { YearviewComponent } from './yearview/yearview.component';
import { TodosService } from './services/todos.service';
import { GoalsService } from './services/goals.service';
import { DailyaimsService } from './services/dailyaims.service';
import { EventsService } from './services/events.service';
import { GoallistComponent } from './goallist/goallist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { DailyaimlistComponent } from './dailyaimlist/dailyaimlist.component';
import { GoalFormularComponent } from './goal-formular/goal-formular.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ViewComponent,
    EventbarComponent,
    NavbarComponent,
    DayviewComponent,
    WeekviewComponent,
    MonthviewComponent,
    YearviewComponent,
    GoallistComponent,
    TodolistComponent,
    DailyaimlistComponent,
    GoalFormularComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodosService,
    GoalsService,
    DailyaimsService,
    EventsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
