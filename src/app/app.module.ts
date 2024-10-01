import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { HomeComponent } from './pages/home/home.component';
import { TrackComponent } from './components/track/track.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumCarouselComponent } from './components/album-carousel/album-carousel.component';
import { TrackCarouselComponent } from './components/track-carousel/track-carousel.component';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SwipeDirective } from './components/directives/swipe.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    TracksComponent,
    HomeComponent,

    // components
    TrackComponent,
    AlbumComponent,
    AlbumCarouselComponent,
    TrackCarouselComponent,
    ModalDialogComponent,
    DialogComponent,

    // directives
    SwipeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
