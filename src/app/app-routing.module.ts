import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskDetailComponent } from './component/task-detail/add-task-detail.component';
import { BoardComponent } from './component/board/board.component';
import { ContactDetailComponent } from './component/contact-detail/contact-detail.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { LoginComponent } from './auth-component/login/login.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { ClientsComponent } from './component/clients/clients.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'mainpage', component: MainpageComponent,
    children: [
      {path: '', component: BoardComponent},
      {path: 'board', component: BoardComponent},
      {path: 'addTask/:id', component: AddTaskDetailComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'contacts/:id', component: ContactDetailComponent},
      {path: 'clients', component: ClientsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
