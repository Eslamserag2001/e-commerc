import { HttpClient } from '@angular/common/http';
import { afterNextRender, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../base/enviroment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  userheaders!:any
// userheaders:any={token:localStorage.getItem("usertoken")} عامله ايرور عالسيرفر
  constructor(private _HttpClient:HttpClient,@Inject(PLATFORM_ID) private platformId: Object  ) {
    afterNextRender(() => {

      // const token = { token: localStorage.getItem('usertoken') }
      this.userheaders = localStorage.getItem('usertoken')
    })

   }

checkoutapi(cardid:string,userdatavalue:any):Observable<any>{
  return this._HttpClient.post(`${enviroment.baseurl}/api/v1/orders/checkout-session/${cardid}?url=http://localhost:4200`,
    {shippingAddress : userdatavalue },
    {headers:{ token:this.userheaders } }

  )
}





}
