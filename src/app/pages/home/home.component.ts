import { Component, OnInit } from '@angular/core';
import { TrackSection } from 'src/app/models/container';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  picked?: TrackSection
  forYou?: TrackSection
  trending?: TrackSection

  ngOnInit(): void {
    this.picked = {
      name: "Picked for you",
      items: [
        { title: "Agalliao", artist: "Emmanuel Iren", label: "label", coverUrl: "/assets/images/advisory.png" },
        { title: "Now That We Are Married", artist: "Theophilus Sunday", label: "label", coverUrl: "/assets/images/daily-discovery.png" },
        { title: "Sound of Revival", artist: "Minister GUC", label: "label", coverUrl: "/assets/images/my-mix.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", label: "label", coverUrl: "/assets/images/track-radio.png" },
        { title: "Adullam", artist: "1Spirit & Theophilus Sunday", label: "label", coverUrl: "/assets/images/foo-fighter.png" },
        { title: "Agalliao", artist: "Emmanuel", label: "label", coverUrl: "/assets/images/advisory.png" },
        { title: "Agalliao", artist: "Emmanuel", label: "label", coverUrl: "/assets/images/daily-discovery.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", label: "label", coverUrl: "/assets/images/my-mix.png" }
      ]
    }

    this.trending = this.forYou = {
      name: "Suggested Albums",
      items: [
        { title: "Agalliao", artist: "Emmanuel Iren", suggestion: "New For You", coverUrl: "/assets/images/new-arrival.png" },
        { title: "Now That We Are Married", artist: "Theophilus Sunday", suggestion: "New For You", coverUrl: "/assets/images/loaded-x.png" },
        { title: "Sound of Revival", artist: "Minister GUC", suggestion: "New For You", coverUrl: "/assets/images/roasted.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" },
        { title: "Adullam", artist: "1Spirit & Theophilus Sunday", suggestion: "New For You", coverUrl: "/assets/images/new-arrival.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/loaded-x.png" },
        { title: "Agalliao", artist: "Emmanuel", suggestion: "New For You", coverUrl: "/assets/images/roasted.png" },
        { title: "Agalliao", artist: "Dusin Onyeka", suggestion: "New For You", coverUrl: "/assets/images/london-grammar.png" }
      ]
    }
  }
}
