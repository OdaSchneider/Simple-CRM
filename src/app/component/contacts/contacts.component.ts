import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddContactComponent } from 'src/app/dialog/dialog-add-contact/dialog-add-contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts = [];
  searchContact: string;


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }


  ngOnInit(): void {
    this.firestore
      .collection('contact')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allContacts = changes;
      })
  }


  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent);
  }


  openUserDetail(){
    this.dialog.open(ContactDetailComponent);
  }

}
