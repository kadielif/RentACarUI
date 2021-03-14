import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarResponseModel } from 'src/app/models/CarResponseModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCar();
  }
  getCar(){
    this.carService.getCars()
    .subscribe(response=>{
      this.cars=response.data
      console.log(response.data);
    });
  }

}
