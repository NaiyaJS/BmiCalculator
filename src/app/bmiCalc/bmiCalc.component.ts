import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BmiService } from '../../bmiService';

@Component({
  selector: 'app-bmiCalc',
  templateUrl: './bmiCalc.component.html',
  styleUrls: ['./bmiCalc.component.css']
})
export class BmiCalcComponent {
  title = 'Adult BMI Calculator';
  isMetric = false;
  showResults = false;
  heightInFeet!: number;
  heightInInches!: number;
  heightInCm!: number;
  weightInPounds!: number;
  weightInKg!: number;
  bmi!: number;
  bmiWeightStatus!: string;

  constructor(private bmiService: BmiService, private router: Router){

  }
 
  calculateBMI(){
    if(this.isMetric){
      this.calculateMetricBMI();
    }else{
      this.calculateEnglishBMI();
    }
    

    this.bmiService.setBmi(this.bmi, this.bmiWeightStatus);
    this.bmiService.setHeight(this.heightInFeet, this.heightInInches, this.heightInCm);
    this.bmiService.setWeight(this.weightInPounds, this.weightInKg)
    this.showResults = true;
    this.navigateToResults();
  }
  navigateToResults(){
    this.router.navigate(['results']);
  }

  private setBMIWeightStatus(){
    if(this.bmi < 18.5){
      this.bmiWeightStatus = "Underweight";

    }else if(this.bmi < 25){
      this.bmiWeightStatus = "Healthy Weight";

    }else{
      this.bmiWeightStatus = "Overweight";
    }
  }
  
//metric bmi = kg/m^2
//english bmi = (weight(lb)/[height(in)]^2) * 703

  private calculateMetricBMI(){
    const heightInMeters = this.heightInCm / 100;
    this.bmi = this.weightInKg / (heightInMeters * heightInMeters);
    this.setBMIWeightStatus();
  

  }
  private calculateEnglishBMI(){
    const totalHeightInInches = (this.heightInFeet * 12) + this.heightInInches;
    this.bmi = (this.weightInPounds / (totalHeightInInches * totalHeightInInches)) * 703
    this.setBMIWeightStatus()
  }

  resetCalculator(){
    this.showResults = false;
  }
  switchToEnglish(){
    this.isMetric = false;
  }

  switchToMetric(){
    this.isMetric = true;
  }

}

