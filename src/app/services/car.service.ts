import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/CarResponseModel';
import { BrandService } from './brand.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44315/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }

}
