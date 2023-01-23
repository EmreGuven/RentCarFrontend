import { Brand } from 'src/app/models/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBrandName'
})
export class FilterBrandNamePipe implements PipeTransform {

  transform(value: any, filterId: number): any {
    console.log("filter ");
    
    filterId=filterId?filterId:null
    console.log(filterId);
    
    return filterId?value.filter((p:Brand)=>p.id.toExponential(filterId)):filterId
    
    
    /* indexOf(filterText)!==-1):value; */
  }

}
