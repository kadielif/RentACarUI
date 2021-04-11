import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  brand:Brand;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"] && params["brandName"]){
        console.log(params["id"]+params["brandName"]);
       
        this.brand={id:params["id"],brandName:params["brandName"]}
        
        //this.getColor(params["id"],params["colorName"]);
      }
    })
    this.createBrandUpdateForm();
  }
  update(){
    let brandModel:Brand;
    brandModel=Object.assign({},this.brandUpdateForm.value);
    brandModel.id=parseInt(this.brand.id.toString());
    this.brandService.update(brandModel).subscribe(response=>{
      console.log(response.message);
    });
  }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }
}
