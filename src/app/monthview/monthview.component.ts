import { Component} from '@angular/core';

@Component({
  selector: 'monthview',
  templateUrl: './monthview.component.html',
  styleUrls: ['./monthview.component.sass']
})
export class MonthviewComponent {

  constructor() { }
NewAlert(){
  alert("Event hinzufügen")
}
  WeekDays = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: "Sunday",
    }

}
