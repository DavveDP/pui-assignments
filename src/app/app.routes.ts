import { Routes } from '@angular/router';
import { EmailReaderBasicComponent } from './components/exercise1/email-reader-basic/email-reader-basic.component'
import { EmailReaderListComponent } from './components/exercise2/email-reader-list/email-reader-list.component';
import { EmailWithServiceComponent } from './components/exercise3/email-with-service/email-with-service.component';
import { EmailFormComponent } from './components/exercise4/email-form/email-form.component';
import { EmailsListComponent } from './components/exercise4/emails-list/emails-list.component';
import { EmailViewerComponent } from './components/exercise4/email-viewer/email-viewer.component';

export const routes: Routes = [
    { path: "exercise1", component: EmailReaderBasicComponent },
    { path: "exercise2", component: EmailReaderListComponent },
    { path: "exercise3", component: EmailWithServiceComponent },
    { path: "exercise4-form", component: EmailFormComponent },
    { path: "exercise4-list", component: EmailsListComponent },
    { path: "exercise4-viewer", component: EmailViewerComponent },
];
