import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { BmiCalcComponent } from './bmiCalc/bmiCalc.component';

const routes: Routes = [
  {path: 'bmiCalc', component: BmiCalcComponent},
  {path:'results', component: ResultsComponent},
  {path: '', redirectTo: '/bmiCalc', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
