import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaisingIndicatorBarComponent } from './fund-raising-indicator-bar.component';

describe('FundRaisingIndicatorBarComponent', () => {
  let component: FundRaisingIndicatorBarComponent;
  let fixture: ComponentFixture<FundRaisingIndicatorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaisingIndicatorBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundRaisingIndicatorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
