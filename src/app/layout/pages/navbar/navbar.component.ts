import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthsrviceService } from '../../service/authsrvice.service';
import { __values } from 'tslib';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {




  constructor(private AuthsrviceService: AuthsrviceService,private Router:Router) { }

  islogin: boolean = false

  ngOnInit(): void {

    this.AuthsrviceService.userdata.subscribe(() => {

      if (this.AuthsrviceService.userdata.getValue() == null) {
        this.islogin = false
      }
      else {
        this.islogin = true
      }



    })
  }

  logout(){
    localStorage.clear(),
    this.Router.navigate(['/Login'])
    this.AuthsrviceService.userdata.next(null)
  }



}

