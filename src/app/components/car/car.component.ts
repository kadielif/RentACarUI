import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getByBrandId(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getByBrandId(params["colorId"]);
      }
    }))
    this.getCar();
  }

  getCar(){
    this.carService.getCars()
    .subscribe(response=>{
      this.cars=response.data
      console.log(response.data)
    });
  }
  getByBrandId(id:number){
    this.carService.getByBrandId(id).subscribe(response=>{
      this.cars=response.data
      console.log(this.cars);
    })
  }
  getByColorId(id:number){
    this.carService.getByBrandId(id).subscribe(response=>{
      this.cars=response.data
      console.log(this.cars);
    })
  }

}
