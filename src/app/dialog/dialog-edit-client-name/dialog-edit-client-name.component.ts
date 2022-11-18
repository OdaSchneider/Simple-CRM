import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/models/client.class';

@Component({
  selector: 'app-dialog-edit-client-name',
  templateUrl: './dialog-edit-client-name.component.html',
  styleUrls: ['./dialog-edit-client-name.component.scss']
})
export class DialogEditClientNameComponent implements OnInit {

  client: Client;
  clientId: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditClientNameComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  save(){
    this.loading = true;
    this.firestore
    .collection('clients')
    .doc(this.clientId)
    .update(this.client.toJSON())
    .then(() =>{
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
