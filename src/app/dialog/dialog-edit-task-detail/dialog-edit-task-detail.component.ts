import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task-detail',
  templateUrl: './dialog-edit-task-detail.component.html',
  styleUrls: ['./dialog-edit-task-detail.component.scss']
})
export class DialogEditTaskDetailComponent implements OnInit {

  task: Task;
  taskId: string;
  loading = false;
  dueDate: Date;

  allContacts = [];

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  constructor(public dialogRef: MatDialogRef<DialogEditTaskDetailComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('contact')
    .valueChanges({ idField: 'contactId' })
    .subscribe((changes: any) => {
      this.allContacts = changes;
    })
  }

  save(){
    this.task.dueDate = this.dueDate.getTime();
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

