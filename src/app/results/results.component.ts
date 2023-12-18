import { Component, OnInit } from '@angular/core';
import { BmiService } from '../../bmiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  title = 'Adult BMI Calculate - Results';
  
  heightInFeet!: number;
  heightInInches!: number;
  heightInCm!: number;
  weightInPounds!: number; 
  weightInKg!: number;
  bmi!: number;
  bmiWeightStatus!: string;

  isMetric: boolean= false;

constructor(private bmiService: BmiService, private router: Router){}
  
ngOnInit(){
  this.heightInFeet = this.bmiService.heightInFeet;
  this.heightInInches = this.bmiService.heightInInches;
  this.heightInCm = this.bmiService.heightInCm;
  this.weightInPounds = this.bmiService.weightInPounds;
  this.weightInKg = this.bmiService.weightInKg;
  this.bmi = this.bmiService.bmi;
  this.bmiWeightStatus = this.bmiService.bmiWeightStatus;
  this.isMetric = !!this.bmiService.heightInCm;
}
recalculateBMI(){
  this.router.navigate(['/bmiCalc'])
}

}

