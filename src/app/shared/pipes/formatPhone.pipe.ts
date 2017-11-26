import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  public transform(value: number): string {
    if (!value) {
      return value.toString();
    }

    const newValue: string = value.toString();

    return `(${newValue.slice(0, 3)}) ${newValue.slice(3, 6)}-${newValue.slice(6, 10)}`;
  }

}
