import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http"
import "rxjs/Rx"
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  youtubeUrl:string = "https://www.googleapis.com/youtube/v3/"
  apiKey:string = "AIzaSyCi0cdT4xMCNw30qT4HbLMHm81Fr1wOyiY";
  playlist:string = "PLfYSSiz4WSs92yT_JnAHDU_oqPzDRP0QE"
  nextPageToken:string;

  constructor(public http:Http) {}

  GetVideos(){
    let url = `${this.youtubeUrl}playlistItems`
    let Params = new URLSearchParams();

    Params.set("part", "snippet")
    Params.set("maxResults", "10")
    Params.set("playlistId", this.playlist)
    Params.set("key", this.apiKey)

    if(this.nextPageToken)
      Params.set("pageToken", this.nextPageToken)

    return this.http.get(url, {search: Params}).map(res =>{
      let Videos:any[] = [];
      this.nextPageToken = res.json().nextPageToken;

      for(let video of res.json().items){
        let snippet = video.snippet
        if(snippet.title.toLowerCase() != "private video")
          Videos.push(snippet)
      }

      console.log(res.json())  
      return Videos
    })
  }
}
