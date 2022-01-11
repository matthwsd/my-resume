import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'break'
})
export class BreakPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\;/g, "\;\n");
  }

}
