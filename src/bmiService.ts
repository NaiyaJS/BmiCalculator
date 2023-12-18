import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class BmiService{
    bmi!: number; 
    bmiWeightStatus!: string;
    heightInFeet!: number;
    heightInInches!: number;
    heightInCm!: number;
    weightInPounds!: number;
    weightInKg!: number;
    
    setHeight(heightInFeet: number, heightInInches: number, heightInCm: number) {
        this.heightInFeet = heightInFeet;
        this.heightInInches = heightInInches;
        this.heightInCm = heightInCm;
      }
    
      setWeight(weightInPounds: number, weightInKg: number) {
        this.weightInPounds = weightInPounds;
        this.weightInKg = weightInKg;
      }
    
      setBmi(bmi: number, bmiWeightStatus: string) {
        this.bmi = bmi;
        this.bmiWeightStatus = bmiWeightStatus;
      }
}
