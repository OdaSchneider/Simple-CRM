import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/models/client.class';

@Component({
  selector: 'app-dialog-add-client',
  templateUrl: './dialog-add-client.component.html',
  styleUrls: ['./dialog-add-client.component.scss']
})
export class DialogAddClientComponent implements OnInit {

  client = new Client();
  allClients = [];
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddClientComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore
    .collection('clients')
    .valueChanges({ idField: 'clientId' })
    .subscribe((changes: any) => {
      this.allClients = changes;
    })
  }


  save(){
    this.loading = true;

    this.firestore
    .collection('clients')
    .add(this.client.toJSON());

    this.loading = false;
    this.dialogRef.close();
  }
}
