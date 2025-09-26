import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Email } from '../../../interfaces/email';
import { EmailFormComponent } from '../../../interfaces/EmailComponent';

@Component({
  selector: 'app-email-reader-basic',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './email-reader-basic.component.html',
  styleUrl: './email-reader-basic.component.css'
})
export class EmailReaderBasicComponent implements OnInit, EmailFormComponent {

  currentEmail: Email = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: ""
    };
  @ViewChild('emailForm') form: any;

  ngOnInit(): void {
    this.currentEmail = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: ""
    }
  }

  send(form: NgForm): void {
    window.alert("Sending email with subject: " + this.currentEmail.subject + " to: " + this.currentEmail.to);
    this.clear();
  }

  clear(): void {
    this.form.reset();
  }
}
