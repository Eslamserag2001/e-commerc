import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthsrviceService } from '../../service/authsrvice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  constructor(private AuthsrviceService: AuthsrviceService, private Router: Router) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/forgetpassword')
    }

  }
  isloading:boolean=false
  isemail: boolean = true
  iscode: boolean = false
  isrestpass: boolean = false
  errmsg!: string


  // *************************************  1
  emailform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  sendemail_btn() {
    this.isloading=true
    this.AuthsrviceService.send_emailformapi(this.emailform.value).subscribe({

      next: (res) => {
        this.isemail = false
        this.iscode = true
        this.isloading=false
      },
      error: (err) => {
        this.errmsg = err.error.message
        
        console.log(err.error);
        
        this.isloading=false
        return false
      }

    })
  }

  // *************************************  2
  codeform: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })
  sendcode_btn() {
    this.isloading=true
    this.AuthsrviceService.send_verfycodeapi(this.codeform.value).subscribe({

      

      next: (res) => {
        this.iscode = false
        this.isrestpass = true
        this.isloading=false


      },
      error: (err) => {
        this.errmsg = err.error.message
        this.isloading=false
        console.log(err.error);
        
        return false
      }

    })
  }

  // ************************************* 3
  resetpassform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z A-Z]*[0-9]{7}/)])
  })
  resetpass_btn() {
    this.isloading=true
    this.AuthsrviceService.send_resetpassapi(this.resetpassform.value).subscribe({

      next: (res) => {
        this.isloading=false
        this.Router.navigate(['/Login'])
      },
      error: (err) => {
        this.errmsg=err.error.message
        this.isloading=false
        return false
       }

    })

  }



}


