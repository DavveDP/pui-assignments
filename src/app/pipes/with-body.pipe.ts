import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'withBody',
  standalone: true
})
export class WithBodyPipe implements PipeTransform {

  transform(emails: Email[], active: boolean): Email[] {
    return active 
      ? emails.filter(email => email.body && email.body != "")
      : emails;
  }
}
