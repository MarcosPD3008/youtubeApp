import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http"
import "rxjs/Rx"
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeUrl:string = "https://www.googleapis.com/youtube/v3/"
  apiKey:string = "AIzaSyCi0cdT4xMCNw30qT4HbLMHm81Fr1wOyiY";
  playlist:string = "PLCKuOXG0bPi2J-C0WPRZdHTG6pareIvV2"
  nextPageToken:string = "";

  constructor(public http:Http) {}

  GetVideos(playlist:string = this.playlist){
    if(playlist != this.playlist){
      this.playlist = playlist;
      this.nextPageToken = "";

    }

    let url = `${this.youtubeUrl}playlistItems`
    let Params = new URLSearchParams();

    Params.set("part", "snippet")
    Params.set("maxResults", "10")
    Params.set("playlistId", playlist)
    Params.set("key", this.apiKey)

    if(this.nextPageToken != "")
      Params.set("pageToken", this.nextPageToken)

    return this.http.get(url, {search: Params}).map(res =>{
      let Videos:any[] = [];
      this.nextPageToken = res.json().nextPageToken;

      for(let video of res.json().items){
        let snippet = video.snippet
        if(snippet.title.toLowerCase() != "private video")
          Videos.push(snippet)
      }
      
      console.log(Videos)
      return Videos
    }, error => console.error("error d", error)) 
  }
}
