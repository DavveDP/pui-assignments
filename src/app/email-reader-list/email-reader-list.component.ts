import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Email } from '../interfaces/email';
import { HighlightOnFocusDirective } from '../directives/highlight-on-focus.directive';

@Component({
  selector: 'app-email-reader-list',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, NgFor, HighlightOnFocusDirective],
  templateUrl: './email-reader-list.component.html',
  styleUrl: './email-reader-list.component.css'
})
export class EmailReaderListComponent {

  currentEmail: Email = {
      from: "",
      to: "",
      subject: "",
      body: ""
    };

  sent: Email[] = [];

  @ViewChild('emailForm') form: any;

  clear() : void {
    this.form.reset();
  }

  send(form: NgForm): void {
    // We can assume that the email is valid, since the form shouldn't allow us to send it
    // We make a copy of currentEmail, as its data gets cleared when we clear the form
    this.sent.push({...this.currentEmail}); 
    window.alert(
      "The email " + this.currentEmail.subject + 
      " has been sent to: " + this.currentEmail.to);
    this.clear();
  }
}
