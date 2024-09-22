import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/media';

@Component({
  selector: 'song-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  @Input() track?: Track
}
