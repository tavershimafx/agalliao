import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TrackSection } from 'src/app/models/container';

@Component({
  selector: 'album-carousel',
  templateUrl: './album-carousel.component.html',
  styleUrls: ['./album-carousel.component.css']
})
export class AlbumCarouselComponent implements OnInit  {
  
  @Input() resource?: TrackSection
  @ViewChild("itemsContain", { static: true }) itemsContain!: ElementRef

  ngOnInit(): void {
    
  }
  
  scrPrev(){
    let l = this.itemsContain.nativeElement.scrollLeft
    this.itemsContain.nativeElement.scroll({ top: 0, left: l - 200, behavior: 'smooth'})
  }

  scrNext(){
    let l = this.itemsContain.nativeElement.scrollLeft
    this.itemsContain.nativeElement.scroll({ top: 0, left: l + 200, behavior: 'smooth'})
  }
}
