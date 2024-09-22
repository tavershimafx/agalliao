import { Component, OnInit } from '@angular/core';
import { TrackSection } from 'src/app/models/container';
import { Album } from 'src/app/models/media';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  
  albums?: Array<Album>
  ngOnInit(): void {
    this.albums = [
        { title: "Agalliao", artist: "Emmanuel Iren", suggestion: "New For You", coverUrl: "/assets/images/new-arrival.png" },
        { title: "Now That We Are Married", artist: "Theophilus Sunday", suggestion: "New For You", coverUrl: "/assets/images/loaded-x.png" },
        { title: "Sound of Revival", artist: "Minister GUC", suggestion: "New For You", coverUrl: "/assets/images/roasted.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" },
        { title: "Adullam", artist: "1Spirit & Theophilus Sunday", suggestion: "New For You", coverUrl: "/assets/images/new-arrival.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/loaded-x.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/roasted.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" },
        { title: "Adullam", artist: "1Spirit & Theophilus Sunday", suggestion: "New For You", coverUrl: "/assets/images/new-arrival.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/loaded-x.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/roasted.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" }
      ]
    
  }
}
