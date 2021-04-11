import { ResponseModel } from "./ResponseModel";

export interface ResponseObjectModel<T> extends ResponseModel {
    data: T
}