import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-contact',
  templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss']
})
export class DialogAddContactComponent implements OnInit {

  contact = new Contact();
  loading = false;
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<DialogAddContactComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  setData(){
    this.loading = true;
    this.contact.color = '#' + Math.floor(0x1000000 * Math.random()).toString(16);
    if(this.contact.birthDate != 0){
      this.contact.birthDate = this.birthDate.getTime();
    }
    this.save();
  }


  save(){
    this.firestore
    .collection('contact')
    .add(this.contact.toJSON());

    this.loading = false;
    this.dialogRef.close();
  }

}
