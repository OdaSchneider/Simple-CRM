import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddClientComponent } from 'src/app/dialog/dialog-add-client/dialog-add-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  allClients = [];
  searchClient: string;


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }


  ngOnInit(): void {
    this.firestore
      .collection('client')
      .valueChanges({ idField: 'clientId' })
      .subscribe((changes: any) => {
        this.allClients = changes;
      })
  }


  openDialogAddClient() {
    this.dialog.open(DialogAddClientComponent);
  }


  openUserDetail(){
    // this.dialog.open(ContactDetailComponent);
  }

}
