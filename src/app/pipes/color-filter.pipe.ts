import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/Color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(colorList:Color[],filterText:string): Color[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?colorList.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):colorList;
 
   }
}
