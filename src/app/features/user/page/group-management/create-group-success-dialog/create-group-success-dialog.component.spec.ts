import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupSuccessDialogComponent } from './create-group-success-dialog.component';

describe('CreateGroupSuccessDialogComponent', () => {
  let component: CreateGroupSuccessDialogComponent;
  let fixture: ComponentFixture<CreateGroupSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupSuccessDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
