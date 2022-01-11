import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, ...args: [number, ...any]): string {
    if (value.length >= args[0]) {
      let part: string = value.substring(0, args[0]);
      let html = `<b class="base-font--highlight'>${part + value.substring(args[0])}</b>`;
      return html;
    }
    return value;

  }

}
