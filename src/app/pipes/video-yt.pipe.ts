import { Pipe, PipeTransform } from '@angular/core';
import {  DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: 'videoYt'
})
export class VideoYtPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value: string): unknown {
    let url = "https://www.youtube.com/embed/"
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
