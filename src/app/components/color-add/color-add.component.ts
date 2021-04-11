import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/Color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  formControl:FormControl;
  colors:Color[]=[];

  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,private colorService:ColorService,private router:Router) { }

  ngOnInit(): void {
    this.createColorForm();
    this.getColors();
  }
  createColorForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    let colorModel:Color;
    colorModel=Object.assign({},this.colorAddForm.value);
    console.log(colorModel);
    
    this.colorService.add(colorModel).subscribe(response=>{this.toastrService.success("Eklendi")},err=>this.toastrService.error("Hata"));
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors=response.data})
  }
  update(id:number,colorName:string){
    this.router.navigate(["color/update/"+id+"/"+colorName]);
   // this.router.navigate(["color/update/"+JSON.stringify(color)]);
  }
}
