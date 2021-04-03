import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/Brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand: Brand;
  filterText="";

  constructor(private brandService:BrandService,private router:Router) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands()
    .subscribe(response=>{
      this.brands=response.data
    })
  }
  getCars(id:Brand){
    console.log(id.id);
    this.router.navigate(["/cars/brands/"+id]); 
  }
  setCurrentBrand(b:Brand){
    this.currentBrand=b;
  }
  getBrandClass(b:Brand){
    if(this.currentBrand==b){
      return 'list-group-item list-group-item-success';
    }else{
      return 'list-group-item list-group-item-light';
    }
  }

}
