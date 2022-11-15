import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog} from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogAddTaskComponent } from '../../dialog/dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  allTasks = [];
  allContacts = [];
  search: string;
  droppedTask: any;

  todo: any = [];
  inProgress: any = [];
  testing: any = [];
  done: any = [];


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getTasks();
    this.getContacts();
  }


  getContacts(){
    this.firestore
    .collection('contact')
    .valueChanges({ idField: 'contactId' })
    .subscribe((changes: any) => {
      this.allContacts = changes;
    })
  }


  getTasks(){
    this.firestore
    .collection('task')
    .valueChanges({ idField: 'taskId' })
    .subscribe((changes: any) => {
      this.allTasks = changes;
      this.filterTasks();
    })
  }


  filterTasks(){
    this.todo = this.allTasks.filter((t: any) => t['currentStatus'] == 'todo');
    this.inProgress = this.allTasks.filter((t: any) => t['currentStatus'] == 'inProgress');
    this.testing = this.allTasks.filter((t: any) => t['currentStatus'] == 'testing');
    this.done = this.allTasks.filter((t: any) => t['currentStatus'] == 'done');
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.droppedTask = event.container.data[event.currentIndex];
      this.saveTasks();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.droppedTask = event.container.data[event.currentIndex];
      this.updateTasksStatus(event);
    }
  }


  updateTasksStatus(event: CdkDragDrop<string[]>) {
    if (event.container.id == 'cdk-drop-list-0') {
      this.todo[event.currentIndex].currentStatus = 'todo';
    } else if (event.container.id == 'cdk-drop-list-1') {
      this.inProgress[event.currentIndex].currentStatus = 'inProgress';
    } else if (event.container.id === 'cdk-drop-list-2') {
      this.testing[event.currentIndex].currentStatus = 'testing';
    } else if (event.container.id === 'cdk-drop-list-3') {
      this.done[event.currentIndex].currentStatus = 'done';
    }
    this.saveTasks();
  }


  saveTasks() {
    this
      .firestore
      .collection('task')
      .doc(this.droppedTask.taskId)
      .update({
        currentStatus: this.droppedTask.currentStatus
      });
  }


  openDialogAddTask(){
    this.dialog.open(DialogAddTaskComponent);
  }

}
