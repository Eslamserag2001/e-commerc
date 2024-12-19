import { Component } from '@angular/core';
import { ServCartService } from '../../service/serv_cart/serv-cart.service'
import { cart_interface } from '../../interfaces/cart_interfacefile/cart_interface';
import { prouduct } from '../../interfaces/prouduct/prouduct';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart_product!: any[]
  cartId!: string
  totalprice!:number
  // ********************************************************************************
  constructor(private ServCartService: ServCartService ,private ToastrService:ToastrService) { }
  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/Cart')
    }

    this.ServCartService.getCartApi().subscribe({
      next: (res) => {
        this.cart_product = res.data.products
        this.totalprice= res.data.totalCartPrice;
        this.cartId = res.data._id 
          // console.log(this.cart_product); 
      },
      error: (err) => { console.log(err); }
    })
  }

  updateCartBtn(id: string, count: number) {
    if(count <=0){
      this.removeCartBtn(id)
      return
    
    }

    this.ServCartService.updateCartApi(id, count).subscribe({
      next:(res)=>{
        this.ToastrService.success('count updated')
        this.cart_product = res.data.products
        
        this.totalprice= res.data.totalCartPrice;
        console.log(res);
        
        
      },
      error:(err)=>{console.log(err);}

    })
  }
  removeCartBtn(id: string) {

    this.ServCartService.removeItemApi(id).subscribe({
      next: (res) => { 
        this.ToastrService.success(" product deleted sucssesfuly")
        this.cart_product = res.data.products
        this.totalprice= res.data.totalCartPrice;
      } ,
      error:(err)=>{console.log(err);}
    })
  }

  clearcartbtn():void{
    this.ServCartService.clearCartapi().subscribe({
     next:(res)=>{
      this.ToastrService.success('cart cleared sucssesfully')
       this.cart_product = []
       this.totalprice= 0;
      console.log(res);
      
     },
     error:(err)=>{
      console.log(err);
      
     }
    })

        
}

}
