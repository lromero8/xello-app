import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() controlButton: any;
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  bottomStyle: any
  
  constructor(private appControlButtons: AppComponent, private el: ElementRef) {}

  // Hostlistener for scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let element = this.el.nativeElement.querySelector('#myID');
    if (element != null) {
      // console.log(window.pageYOffset)
      let contentTopCoordinate = element.getBoundingClientRect().top
      // console.log("offset top", contentTopCoordinate);
      if (contentTopCoordinate <= 0) {
        element.className = "bottomStyle myTooltip";
      }
      
      if (window.pageYOffset === 0){
        element.className = "content myTooltip";
      }
      // console.log(element.className);
    }
  }

  // After View Init for outside tooltip click
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      // console.log(args.target.className);
          if(
            args.target.className !== 'myTooltip' && 
            args.target.className !== 'content myTooltip' &&
            args.target.className !== 'bottomStyle myTooltip' &&
            args.target.className !== 'btn btn-primary btn-lg' &&
            args.target.className !== 'btn btn-success btn-lg') {
            // console.log("click outside");
            this.appControlButtons.btnConfig.buttonB.control = false;
            this.appControlButtons.btnConfig.buttonA.control = false;
          }
    }    
  }
  
  // Button click emiter for app component
  onBtnClick() {
    this.btnClickEmt.emit('You have clicked on a button.');
  }
  
  ngOnInit(): void {}
  

}
