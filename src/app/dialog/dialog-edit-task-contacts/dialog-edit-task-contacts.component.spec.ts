import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTaskContactsComponent } from './dialog-edit-task-contacts.component';

describe('DialogEditTaskContactsComponent', () => {
  let component: DialogEditTaskContactsComponent;
  let fixture: ComponentFixture<DialogEditTaskContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTaskContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTaskContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
