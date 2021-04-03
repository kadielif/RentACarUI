import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Car';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList:Car[],filterText:string): Car[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?carList.filter((c:Car)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1):carList;
 
   }
}
