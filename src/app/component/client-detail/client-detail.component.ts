import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/models/client.class';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  clientId = '';
  client: Client = new Client();

  allClients = [];

  constructor(    
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    public router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.clientId = paramMap.get('id');
      this.getClient();
    })
  }


  getClient() {
    this.firestore
      .collection('clients')
      .doc(this.clientId)
      .valueChanges()
      .subscribe((client: any) => {
        this.client = new Client(client);
      })
  }


  deleteClient() {
    this
      .firestore
      .collection('contact')
      .doc(this.clientId)
      .delete();
    this.router.navigate(['mainpage/clients']);
  }


  editAddress(){
    
  }

}
