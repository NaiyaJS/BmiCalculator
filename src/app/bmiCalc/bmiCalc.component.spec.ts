import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalcComponent } from './bmiCalc.component';

describe('BmiCalcComponent', () => {
  let component: BmiCalcComponent;
  let fixture: ComponentFixture<BmiCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
