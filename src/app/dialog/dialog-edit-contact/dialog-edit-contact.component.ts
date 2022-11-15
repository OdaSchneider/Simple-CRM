import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-dialog-edit-contact',
  templateUrl: './dialog-edit-contact.component.html',
  styleUrls: ['./dialog-edit-contact.component.scss']
})
export class DialogEditContactComponent implements OnInit {

  contact: Contact;
  contactId: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditContactComponent>, private firestore: AngularFirestore) { }

  birthDate: Date;
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
