import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({
  name: 'filterContent',
  standalone: true
})
export class FilterContentPipe implements PipeTransform {

  transform(emails: Email[], filter: string): Email[] {
    return emails.filter(email => 
      email.from.includes(filter) ||
      email.to.includes(filter) ||
      email.subject.includes(filter) ||
      email.body.includes(filter));
  }
}
