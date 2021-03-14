import { Component, OnInit } from '@angular/core';
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

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands()
    .subscribe(response=>{
      this.brands=response.data;
      console.log(response.data);
    })
  }
  setCurrentBrand(b:Brand){
    this.currentBrand=b;
  }
  getBrandClass(b:Brand){
    if(this.currentBrand==b){
      return 'list-group-item list-group-item-warning';
    }else{
      return 'list-group-item list-group-item-dark';
    }
  }

}
