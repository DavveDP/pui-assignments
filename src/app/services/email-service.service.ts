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
      {id: nextId++, from: "andreas@test.io", to: "david@test.io", subject: "Hej", body: ""},
      {id: nextId++, from: "andreas@test.io", to: "david@test.io", subject: "Hej", body: ""},
      {id: nextId++, from: "sara@test.io", to: "arvid@test.io", subject: "Hej", body: ""},
      {id: nextId++, from: "gunnar@test.io", to: "evert@test.io", subject: "Hej", body: ""},
      {id: nextId++, from: "eva@test.io", to: "evert@test.io", subject: "Hej", body: ""}
    ];
  }

  emails: Email[] = [];

  send(email: Email): void {
    window.alert(
      "The email " + email.subject + " has been sent to: " + email.to);
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