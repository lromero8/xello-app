import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xello-app';

  message = 'Click on a button';
  labelA = "A";
  labelB = "B";
  controlA = false;
  controlB = true;


  onClickEventReceivedA(event: string) {

    if (this.controlB) {
      this.controlB = !this.controlB;
    }
    this.controlA = !this.controlA;
    console.log("This is the value of control A", this.controlA);
    console.log("This is the value of control B", this.controlB);
  }

  onClickEventReceivedB(event: string) {
    if (this.controlA) {
      this.controlA = !this.controlA;
    }
    this.controlB = !this.controlB;
    console.log("This is the value of control A", this.controlA);
    console.log("This is the value of control B", this.controlB);

  }


  // isShowA = false;
  // isShowB = true;

  // buttonA(){
  //   console.log("Button A");
  //   this.isShowA = !this.isShowA;
  //   this.isShowB = !this.isShowB;
  // }
  
  // buttonB(){
  //   console.log("Button B");
  //   this.isShowA = !this.isShowA;
  //   this.isShowB = !this.isShowB;

  // }

  
}