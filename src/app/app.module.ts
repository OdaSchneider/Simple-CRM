import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './component/board/board.component';
import { DialogAddTaskComponent } from './dialog/dialog-add-task/dialog-add-task.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ContactDetailComponent } from './component/contact-detail/contact-detail.component';
import { AddTaskDetailComponent } from './component/task-detail/add-task-detail.component';
import { DialogEditTaskComponent } from './dialog/dialog-edit-task/dialog-edit-task.component';
import { LoginComponent } from './auth-component/login/login.component';
import { AuthService } from './shared/services/auth.service';
import { DialogAddContactComponent } from './dialog/dialog-add-contact/dialog-add-contact.component';
import { DialogEditContactComponent } from './dialog/dialog-edit-contact/dialog-edit-contact.component';
import { DialogEditAddressComponent } from './dialog/dialog-edit-address/dialog-edit-address.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { ClientsComponent } from './component/clients/clients.component';
import { DialogEditTaskDetailComponent } from './dialog/dialog-edit-task-detail/dialog-edit-task-detail.component';
import { DialogEditTaskContactsComponent } from './dialog/dialog-edit-task-contacts/dialog-edit-task-contacts.component';
import { DialogAddClientComponent } from './dialog/dialog-add-client/dialog-add-client.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { ForgotPasswordComponent } from './auth-component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth-component/verify-email/verify-email.component';
import { ClientDetailComponent } from './component/client-detail/client-detail.component';
import { DialogEditClientNameComponent } from './dialog/dialog-edit-client-name/dialog-edit-client-name.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DialogAddTaskComponent,
    ContactsComponent,
    DialogAddContactComponent,
    DialogEditContactComponent,
    ContactDetailComponent,
    AddTaskDetailComponent,
    DialogEditTaskComponent,
    LoginComponent,
    SignupComponent,
    DialogEditAddressComponent,
    ClientsComponent,
    DialogEditTaskDetailComponent,
    DialogEditTaskContactsComponent,
    DialogAddClientComponent,
    MainpageComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ClientDetailComponent,
    DialogEditClientNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatButtonToggleModule,
    MatRadioModule,
    ColorPickerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
