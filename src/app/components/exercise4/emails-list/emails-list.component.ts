import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EmailService } from '../../../services/email-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './emails-list.component.html',
  styleUrl: './emails-list.component.css'
})
export class EmailsListComponent {
  constructor(public emailService: EmailService){}

  deleteEmail(id: number): void {
    if(!this.emailService.delete(id)) {
      console.error("Failed to delete email, does not exist in db");
    }
  }
}
