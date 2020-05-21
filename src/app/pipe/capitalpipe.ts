import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
  pure:false
})
export class capitalizepipe implements  PipeTransform{
  transform(value: any, ...args: any[]): any {
    if(!value){
      return value;
    }

      return  value.replace(/\b\w*/g, (word : string) =>
      word.charAt(0).toUpperCase() + word.substr(1).toLocaleLowerCase())

  }

}
