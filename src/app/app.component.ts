import { Component, ElementRef, ViewChild } from '@angular/core';
import isInbound from './utils/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild("side_bar", { static: true }) sideBar!: ElementRef
  constructor(){
    this.clickOut = this.clickOut.bind(this)
  }

  clickOut (e:MouseEvent){
    let el = this.sideBar.nativeElement.getBoundingClientRect()
    let b = isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
    if (!b){
      this.sideBar.nativeElement.classList.remove("slide-in-mob")
      this.sideBar.nativeElement.classList.add("slide-out-mob")
      document.removeEventListener("click", this.clickOut)
    }
  }

  toggleSideBar(){
    if(this.sideBar.nativeElement.classList.contains("slide-out-mob")){
      this.sideBar.nativeElement.classList.remove("slide-out-mob")
      this.sideBar.nativeElement.classList.add("slide-in-mob")
      setTimeout(() => {
        document.addEventListener("click", this.clickOut)
      }, 200);
    }else{
      this.sideBar.nativeElement.classList.remove("slide-in-mob")
      this.sideBar.nativeElement.classList.add("slide-out-mob")
    }
  }
}
