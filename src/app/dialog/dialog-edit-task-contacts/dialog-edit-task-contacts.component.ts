import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task-contacts',
  templateUrl: './dialog-edit-task-contacts.component.html',
  styleUrls: ['./dialog-edit-task-contacts.component.scss']
})
export class DialogEditTaskContactsComponent implements OnInit {

  task: Task;
  taskId: string;
  loading = false;

  allContacts = [];

  constructor(public dialogRef: MatDialogRef<DialogEditTaskContactsComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('contact')
    .valueChanges({ idField: 'contactId' })
    .subscribe((changes: any) => {
      this.allContacts = changes;
    })
  }


  save(){
    this.loading = true;
    this.firestore
    .collection('task')
    .doc(this.taskId)
    .update(this.task.toJSON())
    .then(() =>{
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
