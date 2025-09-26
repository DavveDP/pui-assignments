import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EmailService } from '../../../services/email-service.service';

@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './emails-list.component.html',
  styleUrl: './emails-list.component.css'
})
export class EmailsListComponent {
  constructor(public emailService: EmailService){}
}
