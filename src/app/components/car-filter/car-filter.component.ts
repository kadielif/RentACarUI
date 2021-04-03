import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { Color } from 'src/app/models/Color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  filterTextBrand="";
  filterTextColor="";

  currentColor:number;
  currentBrand:number;
  getByFilterCars:Car[];
  brands:Brand[];
  colors:Color[];

  constructor(
    //private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  getByFilter(brandId:number,colorId:number){
    console.log(brandId,colorId);
    
    this.router.navigate(["cars/carFilter/"+brandId+"/"+colorId]);

  }

}
