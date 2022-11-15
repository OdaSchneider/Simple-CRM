import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {

  task: Task;
  taskId: string;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditTaskComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
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
