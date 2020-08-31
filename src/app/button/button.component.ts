import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() controlButton: any;
  @Input() textButton: String;
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Output() outsideClickEmt: EventEmitter<boolean> = new EventEmitter<boolean>();
  childMessage = 'hola mundo'



  constructor(private controlButtonB: AppComponent) {
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
      // console.log(args.target.className);
          if(
            args.target.className !== 'myTooltip' && 
            args.target.className !== 'content myTooltip' &&
            args.target.className !== 'btn btn-primary') {
            console.log("click outside");
            this.childMessage = 'adios mundo'
            this.controlButtonB.controlB = false;
            this.controlButtonB.controlA = false;
            this.outsideClickEmt.emit(false);
          }
    }

  }

  onKeydown(event: string){
    console.log(event);
  }


  onBtnClick() {
    this.btnClickEmt.emit('You have clicked on a text button.');
    // console.log("This is the value of controlButton ", this.controlButton);
  }

  incrementClickOutsideCount() {
    // this.controlButton = false;
    console.log("click outside directive")
  }
  

}
