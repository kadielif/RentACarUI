import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:44315/api/";
  payment(card:Card):Observable<Card>{
    let newPath=this.apiUrl+"card/payment";
    
    return this.http.post<Card>(newPath,card);
  }
}
