import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }


  ngOnInit(): void {
    this.firestore
      .collection('contact')
      .valueChanges({ idField: 'contactId' })
      .subscribe((changes: any) => {
        this.allContacts = changes;
        this.dataSource = new MatTableDataSource(this.allContacts);
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent);
  }


  openUserDetail(){
    this.dialog.open(ContactDetailComponent);
  }

}
