import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreakPipePipe'
})
export class LineBreakPipePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.match(new RegExp('.{1,25}', 'g')).join('\n');
  }
}
