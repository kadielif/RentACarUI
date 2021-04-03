import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Car';
import { Card } from 'src/app/models/Card';
import { Customer } from 'src/app/models/Customer';
import { Rental } from 'src/app/models/Rental';
import { VatAddedPipe } from 'src/app/pipes/vat-added.pipe';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CardService } from 'src/app/services/card.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalForm:Rental;
  rentalFormEx:FormGroup;
  formControl:FormControl;
  creditCard:FormGroup;

  cars:Car[];
  carImage:string;
  customers:Customer[];
  rentals:Rental[];
  dayCount:number;
  total:number;
  model:Rental;
  constructor(
    private rentalService:RentalService,
    private carDetailService:CarDetailService,
    private cardService:CardService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    if (this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getRentaledCar(params["carId"]);
        this.getRentaledCarImage(params["carId"]);
      }
    })) {
      
    }
    this.createRentalAddForm();
    this.getCustomer();
    this.getRentals();
  }
  createRentalAddForm(){
    this.rentalFormEx=this.formBuilder.group({
      customerId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required]
    });
    this.creditCard=this.formBuilder.group({
      userName:["",Validators.required],
      cardNo:["",Validators.required],
      day:["",Validators.required],
      month:["",Validators.required],
      cvc:["",Validators.required]
    })
  }
  getRentals() {
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data;
    });
  }
  getRentaledCar(id:number){
    this.carDetailService.getCarById(id).subscribe(response=>{
      this.cars=response.data;
    });
  }
  getRentaledCarImage(id:number){
    this.carDetailService.getCarImage(id).subscribe(response=>{
      this.carImage=response.data[0].imagePath;
    })
  }
  getCustomer(){
    this.rentalService.getCustomer().subscribe(response=>{
      this.customers=response.data;
      
    });
  }

  rentalAdd():void{
    this.model=this.convertObject(this.rentalFormEx);
    this.model.customerId=parseInt(this.model.customerId.toString());
    this.model.carId=this.cars[0].carId;
    this.rentalService.rentalAdd(this.model).subscribe(data=>{});
    this.payment();
  }
  payment(){
    var cardModel:Card;
    cardModel=this.convertObject(this.creditCard);
    this.cardService.payment(cardModel).subscribe(response=>{
      this.toastrService.success("Başarılı");
    });
    
  }
  calculate(){
    this.model=this.convertObject(this.rentalFormEx);
    this.dayCount=this.calculateDayCount(this.model.rentDate,this.model.returnDate);
    this.total=this.dayCount*this.cars[0].dailyPrice;
  }
  calculateDayCount(rentDate:Date,returnDate:Date){
    var rent=new Date(rentDate);
    var ret=new Date(returnDate);
    this.dayCount=ret.getTime()-rent.getTime();
    var numberOfDays = Math.ceil(this.dayCount / (1000 * 3600 * 24));
    return numberOfDays+1;
  }
  convertObject(formGroup:FormGroup){
    return Object.assign({},formGroup.value);
  }

}
