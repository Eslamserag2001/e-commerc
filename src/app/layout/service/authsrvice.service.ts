import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { codeinterface, emailinterface, Formdata, logindata, resetpassinterface } from '../interfaces/formdata';
import { json } from 'stream/consumers';
import { enviroment } from '../base/enviroment';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { routes } from '../../app.routes';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthsrviceService {

  // data of token decoding *************************************
  userdata:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor(private _HttpClient: HttpClient, private Router: Router) {

    afterNextRender(() => {

      if (localStorage.getItem('usertoken') != null) {
        this.userdecode()
        Router.navigate([localStorage.getItem('curentpage')])

      }
    })


  }

  //*********** */ authentecation   ***********************
  Sendregester(form: Formdata): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/signup`, form)
  }


  sendlogin(loginform: logindata): Observable<any> {

    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/signin `, loginform)

  }
  // jwt decode
   // userdecode(){
  //   console.log("userdata is: سسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسسس" );
  //   this.userdata.next(jwtDecode (localStorage.getItem('usertoken')!));
  //   console.log("userdatسسسسس"+ this.userdata.getValue());
  // }
  userdecode() {
    const token = localStorage.getItem('usertoken');
  
    // التحقق من وجود الـ JWT قبل فك التشفير
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        this.userdata.next(decodedToken);
        console.log("decodedToken is:", decodedToken);
        console.log("userdata is:", this.userdata.getValue());
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    } else {
      console.error("JWT token not found in localStorage");
    }
  }

  // ****** forget password**************
  send_emailformapi(email: emailinterface): Observable<any> {

    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/forgotPasswords`, email)

  }

  send_verfycodeapi(code: codeinterface): Observable<any> {

    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/verifyResetCode`, code)

  }

  send_resetpassapi(resetpass: resetpassinterface): Observable<any> {

    return this._HttpClient.put(`${enviroment.baseurl}/api/v1/auth/resetPassword`, resetpass)

  }






}
