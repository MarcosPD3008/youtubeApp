import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string): string {
    if(value == null || value == "null") return "./assets/img/noimage.jpg"
    else return value
  }

}
