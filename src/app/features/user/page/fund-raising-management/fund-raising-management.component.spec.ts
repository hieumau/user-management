import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaisingManagementComponent } from './fund-raising-management.component';

describe('FundRaisingManagementComponent', () => {
  let component: FundRaisingManagementComponent;
  let fixture: ComponentFixture<FundRaisingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaisingManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundRaisingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
