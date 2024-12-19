import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

   
  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('curentpage', '/allorders')
    }}
}
