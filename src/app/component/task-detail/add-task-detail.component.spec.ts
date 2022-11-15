import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskDetailComponent } from './add-task-detail.component';

describe('AddTaskDetailComponent', () => {
  let component: AddTaskDetailComponent;
  let fixture: ComponentFixture<AddTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
