import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xello-app';

  btnConfig = {
    buttonA: {
      control: false,
      label: 'A',
      class: 'btn btn-primary'
      
    },
    buttonB:{
      control: true,
      label: 'B',
      class: 'btn btn-success'
    }
    
  };


  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // console.log(event);
    this.btnConfig.buttonA.control = false;
    this.btnConfig.buttonB.control = false;
  }


  onClickEventReceivedA(event: string) {

    if (this.btnConfig.buttonB.control) {
      this.btnConfig.buttonB.control = !this.btnConfig.buttonB.control;
    }
    this.btnConfig.buttonA.control = !this.btnConfig.buttonA.control;
    // console.log("This is the value of controlA", this.control);
    // console.log("This is the value of controlB", this.control);
  }

  onClickEventReceivedB(event: string) {
    if (this.btnConfig.buttonA.control) {
      this.btnConfig.buttonA.control = !this.btnConfig.buttonA.control;
    }
    this.btnConfig.buttonB.control = !this.btnConfig.buttonB.control;
    // console.log("This is the value of control A", this.controlA);
    // console.log("This is the value of control B", this.controlB);

  }

  
}