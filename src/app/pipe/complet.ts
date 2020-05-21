import { Pipe , PipeTransform } from '@angular/core';
import  { Task } from './../model/task';
@Pipe({
  name: 'complet',
  pure:false
})
export  class completpipe implements  PipeTransform{
  transform(value: Task[], ...args: any[]): any {
    if(!value){
      return value;
    }

    return  value.filter( (task:Task) => task.complete==args[0] )
  }

}
