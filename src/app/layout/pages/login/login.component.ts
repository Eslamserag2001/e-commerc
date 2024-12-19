import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthsrviceService } from '../../service/authsrvice.service';
import { Router, RouterLink } from '@angular/router';




Validators
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private AuthsrviceService: AuthsrviceService, private Router: Router) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/Login')
    }
  }
  isloading: boolean = false
  errmsg!: string
  loginform: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z A-Z]*[0-9]{7}/)])

  })
  loginsupmit() {
    this.isloading = true
    this.AuthsrviceService.sendlogin(this.loginform.value).subscribe({
      next: (res) => {
        this.isloading = false
        localStorage.setItem("usertoken", res.token)
        this.AuthsrviceService.userdecode()
        this.Router.navigate(['Home'])

        // console.log(this.AuthsrviceService.userdata);
      },
      error: (error) => {
        this.isloading = false
        this.errmsg = error.error.message
      }
    })


  }


}
