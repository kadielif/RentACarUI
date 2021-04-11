import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/Color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm:FormGroup;
  color:Color;
  constructor(private activatedRoute:ActivatedRoute,private colorService:ColorService,private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["id"] && params["colorName"]){
        console.log(params["id"]+params["colorName"]);
       
        this.color={id:params["id"],colorName:params["colorName"]}
        
        //this.getColor(params["id"],params["colorName"]);
      }
    })
    this.createColorUpdateForm();
  }
  update(){
    let colorModel:Color;
    colorModel=Object.assign({},this.colorUpdateForm.value);
    colorModel.id=parseInt(this.color.id.toString());
    this.colorService.update(colorModel).subscribe(response=>{
      console.log(response.message);
    });
  }
  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

}
