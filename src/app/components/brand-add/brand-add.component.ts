import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  constructor( private formBuilder:FormBuilder,private router:Router, private brandService:BrandService,private toastr:ToastrService) { }
  brandAddForm:FormGroup;
  formControl:FormControl;
  brands:Brand[]=[];
  ngOnInit(): void {
    this.createBrandForm();
    this.getBrands();
  }

  createBrandForm(){
    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  add(){
    let brandModel:Brand;
    brandModel=Object.assign({},this.brandAddForm.value);
    this.brandService.addBrand(brandModel).subscribe(response=>{this.toastr.success("Eklendi")},error=>{
      this.toastr.error()
    });
  }
  getBrands(){
    this.brandService.getBrands().subscribe(res=>{
      this.brands=res.data;
    })
  }
  update(id:number,brandName:string){
    this.router.navigate(["brand/update/"+id+"/"+brandName]);
  }

}
