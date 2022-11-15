import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogEditAddressComponent } from 'src/app/dialog/dialog-edit-address/dialog-edit-address.component';
import { DialogEditContactComponent } from 'src/app/dialog/dialog-edit-contact/dialog-edit-contact.component';
import { Contact } from 'src/models/contact.class';
import { Task } from 'src/models/task.class';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactId = '';
  contact: Contact = new Contact();

  allTasks = [];
  tasks = [];
  assignedTask: boolean;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    public router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.contactId = paramMap.get('id');
      this.getContact();
      this.getTask();
    })
  }


  getContact() {
    this.firestore
      .collection('contact')
      .doc(this.contactId)
      .valueChanges()
      .subscribe((contact: any) => {
        this.contact = new Contact(contact);
      })
  }


  getTask() {
    this.firestore
      .collection('task')
      .valueChanges({ idField: 'taskId' })
      .subscribe((changes: any) => {
        this.allTasks = changes;
        this.getUserTasks();
      });
  }


  getUserTasks() {
    this.allTasks.forEach((task) => {
      let i = this.allTasks.indexOf(task);
      task.contacts.forEach((contact) => {
        if (contact.contactId == this.contactId) {
          this.tasks.push(this.allTasks[i]);
        }
      })
    });
    this.checkForTasks();
  }


  checkForTasks(){
    if(this.tasks.length > 0){
      this.assignedTask = true;
    }
    else{
      this.assignedTask = false;
    }
  }


  editContactDetail() {
    let dialog = this.dialog.open(DialogEditContactComponent);
    dialog.componentInstance.contact = new Contact(this.contact.toJSON());
    dialog.componentInstance.contactId = this.contactId;
  }


  editAddress() {
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.contact = new Contact(this.contact.toJSON());
    dialog.componentInstance.contactId = this.contactId;
  }


  deleteContact() {
    this
      .firestore
      .collection('contact')
      .doc(this.contactId)
      .delete();
    this.updateTasks();
    this.router.navigate(['mainpage/contacts']);
  }


  updateTasks() {
    this.allTasks.forEach((task) => {
      let i = this.allTasks.indexOf(task);
      task.contacts.forEach((assignedContact) => {
        let j = this.allTasks[i].contacts.indexOf(assignedContact);
        if (assignedContact.contactId == this.contactId) {
          this.allTasks[i].contacts.splice(j, 1);
          this.saveTask(i);
        }
      })
    });
  }


  saveTask(i){
    let task = new Task(this.allTasks[i]);
    let taskId = this.allTasks[i].taskId
    this.firestore
    .collection('task')
    .doc(taskId)
    .update(task.toJSON())
  }
}
