
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServproductService } from '../../service/servproduct.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {

  category_id!:any
  category_product!:any

constructor( private ActivatedRoute :ActivatedRoute ,private ServproductService:ServproductService){}

ngOnInit(): void {
 this.ActivatedRoute.paramMap.subscribe((p)=>{
  this.category_id=p.get('id')
  console.log('category_id is:'+this.category_id);
  

 })

 this.ServproductService.Get_spesific_category(this.category_id).subscribe(
  {
    next:(res=>{
      this.category_product=res.data
      console.log('res.data is -->>:'+res.data);
      
    }),
    error:(err=>{
      
      console.log('the error |||||||||||||||||||||||||||');
      
      
      console.log(err);
      })


})



}








}
