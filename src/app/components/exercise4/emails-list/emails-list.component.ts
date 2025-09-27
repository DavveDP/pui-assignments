import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EmailService } from '../../../services/email-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterContentPipe } from '../../../pipes/filter-content.pipe';
import { WithBodyPipe } from '../../../pipes/with-body.pipe';

@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, FilterContentPipe, WithBodyPipe],
  templateUrl: './emails-list.component.html',
  styleUrl: './emails-list.component.css'
})
export class EmailsListComponent {
  constructor(public emailService: EmailService){}

  filterStr: string = "";
  withBodyChecked: boolean = false;

  deleteEmail(id: number): void {
    if(!this.emailService.delete(id)) {
      console.error("Failed to delete email, does not exist in db");
    }
  }
}
