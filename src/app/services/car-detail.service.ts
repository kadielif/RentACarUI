import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
import { CarImages } from '../models/CarImages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
   apiUrl="https://localhost:44315/api/";

  constructor(private httpClient:HttpClient) { }

  getAllCarImage():Observable<ListResponseModel<CarImages>>{
    let newPath=this.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
  getCarImage(id:number):Observable<ListResponseModel<CarImages>>{
    let newPath=this.apiUrl+"carimages/getbyid?id="+id;
    
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
  getCarById(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
