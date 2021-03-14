import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/Car';
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
  getByColorId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycoloridcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  
  }
  getByBrandId(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandidcardetails?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
