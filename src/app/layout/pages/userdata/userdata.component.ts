import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../service/order/order.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent {

  isloading: boolean = false
  cartid!: string
  constructor(private OrderService: OrderService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('curentpage', '/userdata')
    }
    this.ActivatedRoute.paramMap.subscribe((p) => {
      // ! --> في المتغير كارتاد |nullمعناها اكيد هيرجع بديله لل )
      // **عمره ماهيرجع ب نل
      this.cartid = p.get('id')!
       console.log("cardid:"+ this.cartid);
      
    })

  }
  userDataForm: FormGroup = new FormGroup({

    details: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
  })
  checkoutbtn(){
    this.isloading = true
    this.OrderService.checkoutapi(this.cartid,this.userDataForm.value).subscribe({
      next: (res) => {
        this.isloading = false
          window.open(res.session.url,'_self')
         
      },
      error: (err) => {
        this.isloading = false
        console.log(err);

      },
    })



  }


}
