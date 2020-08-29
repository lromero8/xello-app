import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() controlButton: any;
  @Input() textButton: String;
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.btnClickEmt.emit('You have clicked on a text button.');
    // this.controlButton = !this.controlButton;
    // console.log("This is the value of controlButton ", this.controlButton);
  }

  incrementClickOutsideCount() {
    this.controlButton = false;
    console.log("click outside directive")
  }
  

}
