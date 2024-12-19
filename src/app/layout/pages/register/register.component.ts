import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthsrviceService } from '../../service/authsrvice.service';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  isloading: boolean = false
  constructor(private _AuthsrviceService: AuthsrviceService, private Router: Router) { }

  registerform: FormGroup = new FormGroup({

    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.email, Validators.required]),

    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z A-Z]*[0-9]{7}/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z A-Z]*[0-9]{7}/)]),
    phone: new FormControl(null, [Validators.required]),

    //  phone:new FormControl  [, [Validators.required, Validators.pattern(/^(010|011|012)\d{8}$/)]]
  }, this.confirmpass)


  //******  ******************confirm pass */ 
  confirmpass(x: any) {


    if (x.get('password').value === x.get('rePassword').value) {

      return null;

    }

    else {
      return { 'pathmach': true }
    }


  }

  msg!: string
  regestersubmit() {
    this.isloading = true
    this._AuthsrviceService.Sendregester(this.registerform.value).subscribe({

      next: (res) => {
        this.isloading = false
        this.Router.navigate(['Home'])
        // console.log(" good serag");
        // console.log(res);
        // console.log(this.registerform);

      },

      error: (er) => {
        this.isloading = false
        console.log('*****************************************');
        this.msg = er.error.message
        console.log("the error ");
        console.log(er.error);
        console.log('*****************************************');

        // this.Router.navigate(['Cart'])
        console.log('the form');

        console.log(this.registerform);

      }
    })

  }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/Register')
    }
  }



}
