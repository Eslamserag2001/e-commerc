import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../base/enviroment';
@Injectable({
  providedIn: 'root'


})
export class ServproductService {

  constructor(private _HttpClient:HttpClient) { }

//    product     ***/////////////////////

GetAllProduct():Observable<any>{

 return this._HttpClient.get(`${enviroment.baseurl}/api/v1/products`)
}


Get_Specific_Product(product_id:any):Observable<any>{
  return this._HttpClient.get(`${enviroment.baseurl}/api/v1/products/${product_id}`)
}
//    category     ***/////////////////////

GetAllCategory():Observable<any>{
 return this._HttpClient.get(`${enviroment.baseurl}/api/v1/categories`)
}

Get_spesific_category(id:string):Observable<any>{
  return this._HttpClient.get(`${enviroment.baseurl}/api/v1/categories/${id}`)
}
//    brands     ***/////////////////////

Get_All_Brands():Observable<any>{
 return this._HttpClient.get(`${enviroment.baseurl}/api/v1/brands`)
}

Get_spesific_brands(id:string):Observable<any>{
  return this._HttpClient.get(`${enviroment.baseurl}/api/v1/brands/${id}`)
}







}
