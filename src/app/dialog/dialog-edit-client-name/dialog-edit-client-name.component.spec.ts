import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditClientNameComponent } from './dialog-edit-client-name.component';

describe('DialogEditClientNameComponent', () => {
  let component: DialogEditClientNameComponent;
  let fixture: ComponentFixture<DialogEditClientNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditClientNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditClientNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
