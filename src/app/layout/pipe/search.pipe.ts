import { Pipe, PipeTransform } from '@angular/core';
import { prouduct } from '../interfaces/prouduct/prouduct';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(productarr: prouduct[], userword: string): prouduct[] {
    if (!userword) {
      return productarr; // إرجاع مصفوفة  إذا كانت القيمة undefined أو null
    }

    return productarr.filter(

     (p) =>{
        return p.title.toLowerCase().includes(userword.toLowerCase())

      }

    );

  }

}



