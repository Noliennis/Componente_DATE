import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from  '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,NgbDateAdapter,NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Date2Component } from './date2/date2.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { TextMaskModule  } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    Date2Component,
    DateRangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TextMaskModule
    
  ],
  exports:[
    AppComponent
  ],
  providers: [
              {provide: NgbDateAdapter, useClass: AppComponent},
              {provide: NgbDateParserFormatter, useClass: AppComponent}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    