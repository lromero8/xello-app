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
      console.log(element.className);
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      // console.log(args.target.className);
          if(
            args.target.className !== 'myTooltip' && 
            args.target.className !== 'content myTooltip' &&
            // args.target.className !== 'bottomStyle myTooltip' &&
            args.target.className !== 'btn btn-primary' &&
            args.target.className !== 'btn btn-success') {
            // console.log("click outside");
            this.appControlButtons.btnConfig.buttonB.control = false;
            this.appControlButtons.btnConfig.buttonA.control = false;
          }
    }

  }



  onBtnClick() {
    this.btnClickEmt.emit('You have clicked on a button.');
  }

  

}
