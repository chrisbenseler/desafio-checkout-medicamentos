import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return 'R$ ' + value.toString().replace('.', ',');
  }

}
