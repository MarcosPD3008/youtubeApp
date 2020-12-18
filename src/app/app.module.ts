import { YoutubeService } from './services/youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpModule } from "@angular/http";
import { VideoYtPipe } from './pipes/video-yt.pipe';
import { NoImagePipe } from './pipes/no-image.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    VideoYtPipe,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
