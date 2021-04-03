import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(brandList:Brand[],filterText:string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?brandList.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):brandList;
 
   }
}
