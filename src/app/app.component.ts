import { Component, NgModule, Injectable } from '@angular/core';
import { NgbDateStruct,
         NgbDateAdapter,
         NgbDate,
         NgbDatepicker,
         NgbDateParserFormatter,
         NgbCalendar
        } from '@ng-bootstrap/ng-bootstrap';

//window['$'] = jQuery;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//@Injectable()

export class AppComponent  {
  title = 'ComponentesPruebas';
  model: Date;
  jQuery:any;
  $ : any;
  public myModel = ''
  public mask = [/[1-9]/, /\d/,'/', /\d/, /\d/, '/', /\d/, /\d/,/\d/,/\d/,];
 //public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  readonly DELIMITER = '/';

  holidays: {month, day, text}[] = [
    {month: 1, day: 1, text: 'New Years Day'},
    {month: 3, day: 30, text: 'Good Friday (hi, Alsace!)'},
    {month: 5, day: 1, text: 'Labour Day'},
    {month: 5, day: 5, text: 'V-E Day'},
    {month: 7, day: 14, text: 'Bastille Day'},
    {month: 8, day: 15, text: 'Assumption Day'},
    {month: 11, day: 1, text: 'All Saints Day'},
    {month: 11, day: 11, text: 'Armistice Day'},
    {month: 12, day: 25, text: 'Christmas Day'}
  ];
 

  NgOnInit(){
    this.model = new Date();
    const fecha: NgbDate = new NgbDate(14, 7, 1789);
    const date: NgbDate = new NgbDate(14, 7, 1789);                // July, 14 1789
    date.before({ day:14, month: 7,year: 1789 });                // compare to a structure
    date.equals(NgbDate.from({ day:14, month: 7, year: 1789}));  // or to another date object
  }

  isHoliday(date: NgbDate): string {
    const holiday = this.holidays.find(h => h.day === date.day && h.month === date.month);
    return holiday ? holiday.text : '';
  }

  //--------  Deshabilitar Fines de semana --------------
  isWeekend(date: NgbDateStruct) {  
    const d = new Date(date.year, date.month - 1, date.day );
    return d.getDay() === 0 || d.getDay() === 6;
  }
  //-------- Fin Deshabilitar Fines de semana --------------

  toModel(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.day + this.DELIMITER + date.month + this.DELIMITER + date.year;
    }
    return result;
  }

  fromModel(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      let date = value.split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return result;
  }

  

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.day + this.DELIMITER + date.month + this.DELIMITER + date.year;
    }
    return result;
  }
}
