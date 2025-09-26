import { Component, ViewChild, viewChild } from '@angular/core';
import { EmailService } from '../../../services/email-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HighlightOnFocusDirective } from '../../../directives/highlight-on-focus.directive';
import { EmailFormComponent } from '../../../interfaces/EmailComponent';
import { Email } from '../../../interfaces/email';
import { FilterContentPipe } from '../../../pipes/filter-content.pipe';
import { WithBodyPipe } from '../../../pipes/with-body.pipe';

@Component({
  selector: 'app-email-with-service',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, NgFor, HighlightOnFocusDirective, FilterContentPipe, WithBodyPipe],
  templateUrl: './email-with-service.component.html',
  styleUrl: './email-with-service.component.css'
})
export class EmailWithServiceComponent implements EmailFormComponent {
  constructor(public emailService: EmailService) {}

  @ViewChild('emailForm') form: any;
  currentEmail: Email = {
      id: -1,
      from: "",
      to: "",
      subject: "",
      body: ""
  };

  filterStr: string = "";
  withBodyChecked: boolean = false;

  send(ngForm: NgForm): void {
    this.emailService.send({...this.currentEmail});
    this.form.reset();
  }

  clear(): void {
    this.form.reset();
  }
}
