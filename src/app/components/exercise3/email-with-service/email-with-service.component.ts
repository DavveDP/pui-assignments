import { Component } from '@angular/core';
import { EmailService } from '../../../services/email-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HighlightOnFocusDirective } from '../../../directives/highlight-on-focus.directive';
import { EmailFormComponent } from '../../../interfaces/EmailComponent';
import { Email } from '../../../interfaces/email';

@Component({
  selector: 'app-email-with-service',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, NgFor, HighlightOnFocusDirective],
  templateUrl: './email-with-service.component.html',
  styleUrl: './email-with-service.component.css'
})
export class EmailWithServiceComponent implements EmailFormComponent {
  constructor(public emailService: EmailService) {}

  currentEmail: Email = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: ""
  };

  send(ngForm: NgForm): void {
    this.emailService.send(this.currentEmail)
  }

  clear(): void {
    throw new Error('Method not implemented.');
  }
}
