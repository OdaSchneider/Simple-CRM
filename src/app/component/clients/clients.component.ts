import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAddClientComponent } from 'src/app/dialog/dialog-add-client/dialog-add-client.component';
import { Client } from 'src/models/client.class';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  allClients = [];
  displayedColumns: string[] = ['company', 'contact', 'email', 'country', 'companySize'];
  dataSource;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }


  ngOnInit(): void {
    this.firestore
      .collection('clients')
      .valueChanges({ idField: 'clientId' })
      .subscribe((changes: any) => {
        this.allClients = changes;
        this.dataSource = new MatTableDataSource(this.allClients);
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialogAddClient() {
    this.dialog.open(DialogAddClientComponent);
  }


  openUserDetail(){
    // this.dialog.open(ContactDetailComponent);
  }

}
