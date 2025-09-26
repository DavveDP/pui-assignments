import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    this.fillWithDebugEmails();
  }

  private fillWithDebugEmails(): void {
    let nextId: number = 0;
    this.emails = [
      {id: nextId++, from: "andreas@test.io", to: "david@test.se", subject: "Halloj", body: "my body"},
      {id: nextId++, from: "andreas@test.io", to: "david@test.se", subject: "Nämen va kul!", body: "dadiwjdwi"},
      {id: nextId++, from: "sara@test.io", to: "arvid@test.io", subject: "Ojdå", body: ""},
      {id: nextId++, from: "gunnar@test.io", to: "evert@annat.dk", subject: "Helt onödigt", body: ""},
      {id: nextId++, from: "eva@test.io", to: "evert@annat.dk", subject: "Påhittat", body: ""},
      {id: nextId++, from: "carro@test.io", to: "nora@annat.es", subject: "Påhittat", body: ""}
    ];
  }

  emails: Email[] = [];

  send(email: Email): void {
    email.id = this.emails.length;
    this.emails.push(email);
  }

  getSendCount(): number {
    return this.emails.length;
  }

  getAll(): Email[] | null {
    return structuredClone(this.emails);
  }

  get(id: number): Email | null {
    return structuredClone(this.emails.find(e => e.id == id)) ?? null;
  }

  clear(): void {
    this.emails = [];
  }
}