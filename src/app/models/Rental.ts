import { ResponseModel } from "./ResponseModel";

export interface Rental extends ResponseModel{
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate:Date;
}