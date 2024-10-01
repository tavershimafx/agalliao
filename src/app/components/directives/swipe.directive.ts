import { Directive, OnInit, ViewContainerRef } from '@angular/core'

@Directive({
    selector: "swipe-controller"
})
export class SwipeDirective implements OnInit{
    private swipeCoord?: [number, number];
    private swipeTime?: number;
    
    constructor(private container: ViewContainerRef) { 
        this.swipe = this.swipe.bind(this)
    }

    ngOnInit(): void {
        this.container.element.nativeElement.addEveneListener("touchstart", (e:TouchEvent) => this.swipe(e, 'start'))
        this.container.element.nativeElement.addEveneListener("touchend", (e:TouchEvent) => this.swipe(e, 'end'))
    }

    scrPrev(){
        let l = this.container.element.nativeElement.scrollLeft
        this.container.element.nativeElement.scroll({ top: 0, left: l - 200, behavior: 'smooth'})
    }
    
    scrNext(){
        let l = this.container.element.nativeElement.scrollLeft
        this.container.element.nativeElement.scroll({ top: 0, left: l + 200, behavior: 'smooth'})
    }

    swipe(e: TouchEvent, when: string): void {
        const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const time = new Date().getTime();
        if (when === 'start') {
          this.swipeCoord = coord;
          this.swipeTime = time;
        }
        else if (when === 'end') {
          const direction = [coord[0] - this.swipeCoord![0], coord[1] - this.swipeCoord![1]];
          const duration = time - this.swipeTime!;
    
          if (duration < 1000 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
            if (direction[0] < 0) {
              this.scrNext();
            } else {
              this.scrPrev();
            }
          }
        }
    }
}