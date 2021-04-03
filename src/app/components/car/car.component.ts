import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  filterText='';
  cars:Car[]=[];
  carImages:string[]=[];
  constructor( private carDetailService:CarDetailService, private carService:CarService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        console.log("sdfg");
        this.getByFilterCars(params["brandId"],params["colorId"]);
      }
      else if(params["colorId"]){
        this.getByBrandId(params["colorId"]);
      }
      else if(params["brandId"]){
        this.getByBrandId(params["brandId"]);
      }
    }))
    this.getCar();
  }

  getCar(){
    this.carService.getCars()
    .subscribe(response=>{
      this.cars=response.data;
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    });
  }
  getByBrandId(id:number){
    this.carService.getByBrandId(id).subscribe(response=>{
      this.cars=response.data
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
  getByColorId(id:number){
    this.carService.getByColorId(id).subscribe(response=>{
      this.cars=response.data
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
  getByFilterCars(brandId:number,colorId:number){
    console.log(brandId+" "+colorId);
    
    this.carService.getByFilterCars(brandId,colorId).subscribe(response=>{
      console.log(response);
      this.cars=response.data
      for(let i=0;i<this.cars.length;i++)
      { 
        this.getOneImage(this.cars[i].carId);
      }
    })
  }
  goCarDetail(id:number){
    this.router.navigate(["/cars/carDetail/"+id]); 
  }
  getOneImage(id:number):any{
    this.carDetailService.getCarImage(id).subscribe(response=>{
        this.carImages[id]=response.data[0].imagePath; 
    })
  }
}


