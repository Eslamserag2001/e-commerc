import { Component } from '@angular/core';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent {


  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage','/allorders')
    }
}
}
