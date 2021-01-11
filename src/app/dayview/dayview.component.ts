import { Time } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { EventItem } from './../common/common';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['../weekview/weekview.component.sass']
})
export class DayviewComponent {
spanIdDate:Date;
times:Time[]=[];

@Input('eventItems') eventItems: EventItem[];
@Output('spanIdChanged') spanIdChanged = new EventEmitter();

constructor() { }

  ngOnInit(): void {
    let h, m;
    for(h = 6; h <= 23; h++)
      for(m = 0; m <= 30; m += 30) {
        this.times.push({
          hours: h,
          minutes: m
        });
      }
    this.times.push({
      hours: 0,
      minutes: 0
    });
    this.spanIdDate = new Date(2021, 1, 4);
    this.spanIdChanged.emit(this.spanIdDate.toISOString());
  }

  tdClicked($event: { column: number, time: Time }) {
    alert(`New Event Formular/\nModify Event Formular\n\nColumn: ${$event.column}\n\nTime: ${$event.time}`);
  }

  changeSpanId() { //
    this.spanIdDate = new Date(2020, 12, 28);
  }
}


