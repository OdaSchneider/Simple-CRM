import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  contact: Contact;
  contactId: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save(){
    this.loading = true;
    this.firestore
    .collection('contact')
    .doc(this.contactId)
    .update(this.contact.toJSON())
    .then(() =>{
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
