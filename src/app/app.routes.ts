import { Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component'
import { EmailReaderListComponent } from './email-reader-list/email-reader-list.component';

export const routes: Routes = [
    { path: "email-reader-basic", component: EmailReaderBasicComponent },
    { path: "email-reader-list", component: EmailReaderListComponent }
];
