import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { Car } from 'src/app/models/Car';
import { CarModel } from 'src/app/models/CarRequestModel';
import { Color } from 'src/app/models/Color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  formControl:FormControl;

  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  constructor(
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        console.log(params["id"]);
        
      }
    })
    this.getBrands();
    this.getColors();
    this.getCar();
    this.createCarAddForm();
  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      model:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
      
    })
  }
  add(){
    let carModel:CarModel;
    carModel=Object.assign({},this.carAddForm.value);
    carModel.colorId=parseInt(carModel.colorId.toString());
    carModel.brandId=parseInt(carModel.brandId.toString());
    this.carService.add(carModel)
    .subscribe(response=>{
      this.toastrService.success("Araba eklendi")
    },
    err=>{
      this.toastrService.error("Ekleme yapılırken hata oluştu")
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    });
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    });
  }
  getCar(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
  update(id:number){
    this.router.navigate(["car/update/"+id]);
  }
}
