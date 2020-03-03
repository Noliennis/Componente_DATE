import { Component, OnInit  } from '@angular/core'; 
import { NgbDateStruct,
         NgbDate,
         NgbCalendar
        } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date2',
  templateUrl: './date2.component.html',
  styleUrls: ['./date2.component.css']
})
export class Date2Component implements OnInit {
  model2: NgbDateStruct;
  constructor(private calendar: NgbCalendar) {
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;
//  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  isWeekend(date: NgbDate) {  
    const d = new Date(date.year, date.month - 1, date.day );
    return d.getDay() === 0 || d.getDay() === 6;
  }
  ngOnInit() {
  }

}
