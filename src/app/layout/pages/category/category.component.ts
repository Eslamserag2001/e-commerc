import { Component } from '@angular/core';
import { ServproductService } from '../../service/servproduct.service';
import { Category_interface } from '../../interfaces/prouduct/prouduct';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServCartService } from '../../service/serv_cart/serv-cart.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  CategoryProduct!: Category_interface[]
  constructor(private _ServproductService: ServproductService ,private ToastrService:ToastrService ,private ServCartService:ServCartService) { }

  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/Category')
    }

    this._ServproductService.GetAllCategory().subscribe({
      next: (res) => {
        this.CategoryProduct = res.data
      },
      error: (err) => {

        console.log(err);

      }
    })

  }

  addToCartBtn(item_id: string) {
    this.ServCartService.addToCartApi(item_id).subscribe({

      next: (res) => {
        this.ToastrService.success('Added successfully');
      },

      error: (err) => {
        this.ToastrService.error(err.error.message, 'oops')

        console.log(err);

      }



    })


  }


}
