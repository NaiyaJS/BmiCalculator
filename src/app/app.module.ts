import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalcComponent } from './bmiCalc/bmiCalc.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';
import { BmiService } from '../bmiService';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalcComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [BmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
