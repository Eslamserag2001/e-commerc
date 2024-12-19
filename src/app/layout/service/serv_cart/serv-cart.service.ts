import { HttpClient } from '@angular/common/http';
import { afterNextRender, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthsrviceService } from '../authsrvice.service';
import { enviroment } from '../../base/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServCartService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private HttpClient: HttpClient, private AuthsrviceService: AuthsrviceService,) {
    afterNextRender(() => {

      // const token = { token: localStorage.getItem('usertoken') }
      this.token = localStorage.getItem('usertoken')
    })
  }

  token!: any
  addToCartApi(pid: string): Observable<any> {

    return this.HttpClient.post(`${enviroment.baseurl}/api/v1/cart`, { productId: pid },

      { headers: { token: this.token } })
  }

  getCartApi(): Observable<any> {
    return this.HttpClient.get(`${enviroment.baseurl}/api/v1/cart `, { headers: { token: this.token } })
  }

  updateCartApi(pid: string, count: number): Observable<any> {

      return this.HttpClient.put(`${enviroment.baseurl}/api/v1/cart/${pid}`,
       { count: count },
        { headers: { token: this.token } })
  }

  removeItemApi(pid: string): Observable<any> {
    return this.HttpClient.delete(`${enviroment.baseurl}/api/v1/cart/${pid}`,{headers:{token: this.token}})
  }

  clearCartapi():Observable<any> {
    return this.HttpClient.delete(`${enviroment.baseurl}/api/v1/cart`,{ headers:{ token: this.token}})
  }


  // payment method********//////////////////

}
