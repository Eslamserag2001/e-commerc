import { Component } from '@angular/core';
import { ServproductService } from '../../service/servproduct.service';
import { ServCartService } from '../../service/serv_cart/serv-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  category_items!: any

  constructor(private ServproductService: ServproductService, private ServCartService:ServCartService ,private ToastrService:ToastrService) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/brands')
    }

    this.ServproductService.Get_All_Brands().subscribe({
      next: (res) => {
        this.category_items = res.data
      },
      error: (err) => {

        console.log(err);

      }
    })

  }


  addToCartBtn(item_id: string) {
    this.ServCartService.addToCartApi(item_id).subscribe({

      next: (res) => {
        this.ToastrService.success('Added successfully', 'Hello !');
      },

      error: (err) => {
        this.ToastrService.error(err.error.message, 'oops')

        console.log(err);

      }



    })


  }








}
