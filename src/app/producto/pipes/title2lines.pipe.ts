import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title2lines',
})
export class Title2Lines implements PipeTransform {
  transform(value: string, valorConsiderar: number = 40): string {
    if (value.length < valorConsiderar) {
      return value;
    } else {
      return value.substring(0, valorConsiderar).concat('...');
    }
  }
}
