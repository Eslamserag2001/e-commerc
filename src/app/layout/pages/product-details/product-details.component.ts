
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServproductService } from '../../service/servproduct.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Data } from '../../interfaces/prouduct/prouduct';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})

export class ProductDetailsComponent {
  product_id!: string | null
  errmsg!: string
  product!: Data

  constructor(private _ActivatedRoute: ActivatedRoute, private ServproductService: ServproductService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.product_id = p.get('id')
      console.log('product-id -1-parm-' + this.product_id);
    })

      this.ServproductService.Get_Specific_Product(this.product_id).subscribe({
        next: (res) => {
          this.product = res.data
          console.log("response--> -2->>--" + res.data);
        },
        error: (err) => {
          console.log("eroror" + err);
        }
      })



















      

    
  }


  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
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





}


