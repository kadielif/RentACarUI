import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(dayCount:number,dailyOfPrice:number): number {
    console.log("çalıştı");
    return dayCount*dailyOfPrice;
  }

}
