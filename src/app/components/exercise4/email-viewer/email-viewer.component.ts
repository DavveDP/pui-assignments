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
    let idToShow = this.route.snapshot.queryParamMap.get('id');
    if (idToShow == null) {
      console.error("Missing queryParam 'id' when loading EmailViewer");
      // outside the scope of the exercise to handle errors...
      return;
    }
    let n = parseInt(idToShow);
    if (Number.isNaN(n)) {
      console.error("Unable to parse query param 'id' to number");
      // outside the scope of the exercise to handle errors...
      return;
    }
    let email = this.emailService.get(n);
    if (!email) {
      console.error("No email found with id: " + n);
      return;
    }
    this.email = email;
  }

  email: Email | null = null;
}
