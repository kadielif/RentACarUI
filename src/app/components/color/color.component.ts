import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  filterText="";
  currentColor:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    if(!this.currentColor){
      this.getColors();
    }
    
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
     
    });
  }
  setCurrentColor(c:Color){
    this.currentColor=c;
    
  }
  getColorClass(c:Color){
    if(this.currentColor==c){
      return 'list-group-item list-group-item-success';
    }else{
      return 'list-group-item list-group-item-light';
    }
  }

}
