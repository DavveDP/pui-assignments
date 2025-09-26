import { Component, ViewChild } from '@angular/core';
import { Email } from '../../../interfaces/email';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { HighlightOnFocusDirective } from '../../../directives/highlight-on-focus.directive';
import { EmailService } from '../../../services/email-service.service';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, NgFor, HighlightOnFocusDirective],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {
  constructor(private emailService: EmailService) {}
  
  currentEmail: Email = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: ""
    };

  @ViewChild('emailForm') form: any;

  clear() : void {
    this.form.reset();
  }

  send(form: NgForm): void {
    // We can assume that the email is valid, since the form shouldn't allow us to send it
    // We make a copy of currentEmail, as its data gets cleared when we clear the form
    this.emailService.send({...this.currentEmail}); 
    window.alert(
      "The email " + this.currentEmail.subject + 
      " has been sent to: " + this.currentEmail.to);
    this.clear();
  }
}
