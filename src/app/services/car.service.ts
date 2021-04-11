import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/Car';
import { ResponseModel } from '../models/ResponseModel';
import { CarModel } from '../models/CarRequestModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44315/api/";
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getById():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbyidcardetail";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getByColorId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycoloridcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  
  }
  getByBrandId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandidcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getByFilterCars(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{    
    let newPath=this.apiUrl+"cars/getbyfiltercar?brandId="+brandId+"&colorId="+colorId;
    console.log(newPath);
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(car:CarModel):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
