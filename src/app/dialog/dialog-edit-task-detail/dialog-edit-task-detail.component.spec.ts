import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskDetailComponent } from './dialog-edit-task-detail.component';

describe('DialogEditTaskDetailComponent', () => {
  let component: DialogEditTaskDetailComponent;
  let fixture: ComponentFixture<DialogEditTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
