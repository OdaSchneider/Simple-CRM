import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAddContactComponent } from 'src/app/dialog/dialog-add-contact/dialog-add-contact.component';
import { DialogEditTaskContactsComponent } from 'src/app/dialog/dialog-edit-task-contacts/dialog-edit-task-contacts.component';
import { DialogEditTaskDetailComponent } from 'src/app/dialog/dialog-edit-task-detail/dialog-edit-task-detail.component';
import { Task } from 'src/models/task.class';
import { DialogEditTaskComponent } from '../../dialog/dialog-edit-task/dialog-edit-task.component';

@Component({
  selector: 'app-add-task-detail',
  templateUrl: './add-task-detail.component.html',
  styleUrls: ['./add-task-detail.component.scss']
})
export class AddTaskDetailComponent implements OnInit {

  taskId = '';
  task: Task = new Task();
  date: string = '';

  allContacts = [];

  constructor(
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    private dialog: MatDialog,
    public router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.taskId = paramMap.get('id');
    });

    this.getTasks();
  }


  getTasks(){
    this.firestore
    .collection('task')
    .doc(this.taskId)
    .valueChanges()
    .subscribe((task:any) => {
      if(task != null){
        this.task = new Task(task);
        this.date = new Date(task.dueDate).toLocaleDateString();
      }
    });
  }


  editTaskInfo(){
    let dialog = this.dialog.open(DialogEditTaskComponent);
    dialog.componentInstance.task = new Task(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }


  editTaskDetail(){
    let dialog = this.dialog.open(DialogEditTaskDetailComponent);
    dialog.componentInstance.task = new Task(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }


  editTaskContacts(){
    let dialog = this.dialog.open(DialogEditTaskContactsComponent);
    dialog.componentInstance.task = new Task(this.task.toJSON());
    dialog.componentInstance.taskId = this.taskId;
  }


  moveTaskDown(){
    if(this.task.currentStatus == 'done'){
      this.task.currentStatus = 'testing';
    }
    else if(this.task.currentStatus == 'testing'){
      this.task.currentStatus = 'inProgress';
    }
    else if(this.task.currentStatus == 'inProgress'){
      this.task.currentStatus = 'todo';
    }
    this.save();
  }


  moveTaskUp(){
    if(this.task.currentStatus == 'todo'){
      this.task.currentStatus = 'inProgress';
    }
    else if(this.task.currentStatus == 'inProgress'){
      this.task.currentStatus = 'testing';
    }
    else if(this.task.currentStatus == 'testing'){
      this.task.currentStatus = 'done';
    }
    this.save();
  }


  save(){
    this.firestore
    .collection('task')
    .doc(this.taskId)
    .update(this.task.toJSON())
  }


  deleteTask(){
    this
    .firestore
    .collection('task')
    .doc(this.taskId)
    .delete()

    this.router.navigate(['mainpage/board']);
  }


  openDialogAddContact() {
    this.dialog.open(DialogAddContactComponent);
  }
}
