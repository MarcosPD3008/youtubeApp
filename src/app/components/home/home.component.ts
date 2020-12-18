import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';
//import { jquery as $ } from "../../../../node_modules/jquery"
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  Videos:any[] = []
  SelectedVideo:any;

  constructor(public ys:YoutubeService) {
    this.ys.GetVideos().subscribe(videos =>{
      this.Videos = videos;
    })
  }

  ngOnInit(): void {
  }

  VerVideo(video:any){
    this.SelectedVideo = video;
    $('#exampleModal').modal()
  }
  
  CerrarModal(){
    this.SelectedVideo = null;
    $('#exampleModal').modal("hide");
  }

  CargarMas(){
    this.ys.GetVideos().subscribe(videos =>{
      this.Videos.push.apply(this.Videos, videos);
    })
  }
}
