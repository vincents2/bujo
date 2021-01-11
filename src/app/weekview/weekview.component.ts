import { EventItem } from './../common/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.sass']
})
export class WeekviewComponent implements OnInit {

  @Input('eventItems') eventItems: EventItem[];
  @Input('spanId') forcedSpanIdDate: Date;
  
  @Output('spanIdChanged') spanIdChanged = new EventEmitter();

  spanIdDate: Date;
  times: Time[] = [];
  days: { weekday: string, date: Date }[] = [];

  constructor() { }

  ngOnInit(): void {
    let hours;
    for(hours = 1; hours <= 23; hours++) {
      this.times.push(null);
      this.times.push({
        hours: hours,
        minutes: 0
      });
    }
    this.spanIdDate = new Date(2021, 1, 11);
    this.spanIdChanged.emit(this.spanIdDate.toISOString());

    this.updateDays();
  }

  updateDays() {
    this.days = [
      { weekday: 'Mon', date: this.spanIdDate },
      { weekday: 'Tue', date: this.spanIdDate },
      { weekday: 'Wed', date: this.spanIdDate },
      { weekday: 'Thu', date: this.spanIdDate },
      { weekday: 'Fri', date: this.spanIdDate },
      { weekday: 'Sat', date: this.spanIdDate },
      { weekday: 'Sun', date: this.spanIdDate }
    ];
  }

  tdClicked($event: { column: number, time: Time }) {
    alert(`New Event Formular/\nModify Event Formular\n\nColumn: ${$event.column}\n\nTime: ${$event.time}`);
  }

  changeSpanId() { //
    this.spanIdDate = new Date(2020, 12, 28);
    this.spanIdChanged.emit(this.spanIdDate.toISOString());
  }
  debug() { //
    alert(`this.spanId = ${this.spanIdDate.toISOString()}\n\nthis.eventItems = ${JSON.stringify(this.eventItems)}`);
  }
}
