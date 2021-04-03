import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';
import { ResponseModel } from '../models/ResponseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44315/api/rentals/getrentaldetail";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  getCustomer():Observable<ListResponseModel<Customer>>{
    let apiUrl="https://localhost:44315/api/customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(apiUrl);
  }
  rentalAdd(rental:Rental):Observable<ResponseModel>{
    let apiUrl="https://localhost:44315/api/rentals/add";
    return this.httpClient.post<ResponseModel>(apiUrl,rental);
  }
}
