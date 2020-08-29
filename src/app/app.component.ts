import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xello-app';

  isShowA = false;
  isShowB = true;

  buttonA(){
    console.log("Button A");
    this.isShowA = !this.isShowA;
    this.isShowB = !this.isShowB;
  }
  
  buttonB(){
    console.log("Button B");
    this.isShowA = !this.isShowA;
    this.isShowB = !this.isShowB;

  }

  
}