import { afterNextRender, Component, OnInit, SimpleChanges } from '@angular/core';
import { ServproductService } from '../../service/servproduct.service';
import { prouduct } from '../../interfaces/prouduct/prouduct';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ServCartService } from '../../service/serv_cart/serv-cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipe/search.pipe';
SearchPipe
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CarouselModule, FormsModule, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productarr!: prouduct[]
  errmsg!: string
  userword:string=""
  constructor(private ServproductService: ServproductService, private ServCartService: ServCartService, private ToastrService: ToastrService) { }
  ngOnInit(): void {

    // localStorage.setItem("curentpage","/Home"     )
    if (typeof localStorage != 'undefined') {

      localStorage.setItem('curentpage', '/Home')
    }

    this.ServproductService.GetAllProduct().subscribe({
      next: (res) => {
        this.productarr = res.data


      },
      error: (error) => {
        console.log(error);


        this.errmsg = error
      }

    })

  }
  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,

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

