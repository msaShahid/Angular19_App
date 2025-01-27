import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == '' || value == null || value == undefined){
      return 'NA'
    }else{
      return value;
    }
  }


}
