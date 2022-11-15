import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  task = new Task();
  loading = false;
  allContacts = [];
  dueDate: Date;


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(public dialogRef: MatDialogRef<DialogAddTaskComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore
    .collection('contact')
    .valueChanges({ idField: 'contactId' })
    .subscribe((changes: any) => {
      this.allContacts = changes;
    })
  }


  save(){
    this.setStandardValue();
    this.loading = true;

    this.firestore
    .collection('task')
    .add(this.task.toJSON());

    this.loading = false;
    this.dialogRef.close();
  }


  setStandardValue(){
    this.task.dueDate = this.dueDate.getTime();
    this.task.currentStatus = 'todo';
    if(this.task.prio == ''){
      this.task.prio = 'low';
    }
  }
}



