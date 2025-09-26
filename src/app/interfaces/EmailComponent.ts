import { NgForm } from "@angular/forms";
import { Email } from "./email";

export interface EmailFormComponent {
    currentEmail: Email;
    send(ngForm: NgForm): void;
    clear(): void;
}