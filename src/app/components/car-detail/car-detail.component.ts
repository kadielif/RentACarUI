import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarImages } from 'src/app/models/CarImages';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImages[]=[];
  cars:Car[]=[];
  constructor( private activatedRoute:ActivatedRoute,private carDetailService:CarDetailService,private router:Router) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"]);
        this.getCar(params["carId"]);
      }
    }))
    this.getAllCarDetails();
    
  } 
  getAllCarDetails(){
  
  }
  getCarImages(id:number){
    this.carDetailService.getCarImage(id).subscribe(response=>{
      this.carImages=response.data;
    });
  }
  isActive(index:number){
    if(index==0){
      return "carousel-item active";
    }else{
      return "carousel-item ";
    }
  }
  getCar(id:number){
    this.carDetailService.getCarById(id).subscribe(response=>{
      this.cars=response.data;
      console.log(response.data);
    });
  }
  getRental(id:number){
    this.router.navigate(["rental/",id]);
  }

}
