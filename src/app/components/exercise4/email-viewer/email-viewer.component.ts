import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../../services/email-service.service';
import { Email } from '../../../interfaces/email';

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [],
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.css'
})
export class EmailViewerComponent implements OnInit{
  constructor(private route: ActivatedRoute, private emailService: EmailService) {}
  ngOnInit(): void {
    let idToShow = this.route.snapshot.paramMap.get('id');
    if (idToShow == null) {
      console.log("Missing queryParam 'id' when loading EmailViewer");
      // outside the scope of the exercise to handle errors...
      return;
    }
    let n = parseInt(idToShow);
    if (!n) {
      console.log("Unable to parse query param 'id' to number");
      // outside the scope of the exercise to handle errors...
      return;
    }
    let email = this.emailService.get(n);
    if (!email) {
      console.log("No email found with id: " + n);
      return;
    }
    this.email = email;
  }

  email: Email | null = null;
}
