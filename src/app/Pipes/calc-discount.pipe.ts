import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountValue:number=25): number {
    // value=200 , discountValue=50
    let div=discountValue/100;// 50/100=.5
    let mul=div*value;//.5*200=100
    let result=value-mul;//200-100=100
    return result;//100
  }

}
