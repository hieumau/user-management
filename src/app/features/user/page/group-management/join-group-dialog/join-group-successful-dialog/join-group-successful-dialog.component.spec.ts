import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGroupSuccessfulDialogComponent } from './join-group-successful-dialog.component';

describe('JoinGroupSuccessfulDialogComponent', () => {
  let component: JoinGroupSuccessfulDialogComponent;
  let fixture: ComponentFixture<JoinGroupSuccessfulDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGroupSuccessfulDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinGroupSuccessfulDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
