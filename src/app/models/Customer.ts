import { ResponseModel } from "./ResponseModel";

export interface Customer extends ResponseModel{
    id:number;
    userId:number;
    companyName:string;   
}