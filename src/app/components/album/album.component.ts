import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/media';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album?: Album
}
