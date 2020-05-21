import { Pipe , PipeTransform } from '@angular/core';
import  { Task } from './../model/task';

@Pipe({
  name: 'search',
  pure:false
})
export  class searchpipe implements  PipeTransform{
  transform(value: Task[], ...args: any[]): any {
    if(!value && !args){
      return value
    }

    let keyword = args[0];
    return  value.filter( (task: Task) => task.name.indexOf(keyword) != -1 )
  }

}
