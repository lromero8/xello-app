import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() controlButton: any;
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();



  constructor(private appControlButtons: AppComponent) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      // console.log(args.target.className);
          if(
            args.target.className !== 'myTooltip' && 
            args.target.className !== 'content myTooltip' &&
            args.target.className !== 'btn btn-primary') {
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
