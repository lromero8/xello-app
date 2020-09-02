import { Component, HostListener } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xello-app';
  navbarCollapsed = true; 


  btnConfig = {
    buttonA: {
      control: true,
      label: 'Tell me',
      class: 'btn btn-primary btn-lg',
      content: 'What do you call a singing laptop?'
      
    },
    buttonB:{
      control: false,
      label: 'A joke!',
      class: 'btn btn-success btn-lg',
      content: 'A Dell'
    }
    
  };

  constructor(private modalService: NgbModal) {}

  // Open modal function
  open(content) {
    if (content == "content") {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    } else {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title2'})
    }
  }


  // Hostlistener for escape key
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    // console.log(event);
    this.btnConfig.buttonA.control = false;
    this.btnConfig.buttonB.control = false;
  }

  // Button A function
  onClickEventReceivedA(event: string) {

    if (this.btnConfig.buttonB.control) {
      this.btnConfig.buttonB.control = !this.btnConfig.buttonB.control;
    }
    this.btnConfig.buttonA.control = !this.btnConfig.buttonA.control;
    // console.log("This is the value of controlA", this.btnConfig.buttonA.control);
    // console.log("This is the value of controlB", this.btnConfig.buttonB.control);
  }

  // Button B function
  onClickEventReceivedB(event: string) {
    if (this.btnConfig.buttonA.control) {
      this.btnConfig.buttonA.control = !this.btnConfig.buttonA.control;
    }
    this.btnConfig.buttonB.control = !this.btnConfig.buttonB.control;
    // console.log("This is the value of control A", this.btnConfig.buttonA.control);
    // console.log("This is the value of control B", this.btnConfig.buttonB.control);

  }

  
}