import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { ResponseObjectModel } from '../models/ResponseObjectModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44315/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
  getById(id:number):Observable<ResponseObjectModel<Color>>{
    let newPath=this.apiUrl+"colors/get?id="+id;
    console.log(newPath);
    return this.httpClient.get<ResponseObjectModel<Color>>(newPath);
  }
  update(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/update";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
}
