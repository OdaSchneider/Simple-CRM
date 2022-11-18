import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';
import { DialogAddContactComponent } from 'src/app/dialog/dialog-add-contact/dialog-add-contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts = [];
  displayedColumns: string[] = ['profileImg', 'name', 'email', 'phone', 'department'];
  dataSource;

  db = getFirestore();


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }


  async ngOnInit(): Promise<void> {
    const q = query(collection(this.db, "contact"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.allContacts = [];
      querySnapshot.forEach((doc) => {
        this.setData(doc);
      });
    });
  }


  setData(doc){
    const contact = { 
      firstName: doc.data()['firstName'],
      lastName: doc.data()['lastName'], 
      email: doc.data()['email'], 
      phone: doc.data()['phone'], 
      department: doc.data()['department'],
      color: doc.data()['color'],
      contactId: doc.id };
    this.allContacts.push(contact);
    this.dataSource = new MatTableDataSource(this.allContacts);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent);
  }


  openUserDetail() {
    this.dialog.open(ContactDetailComponent);
  }

}
