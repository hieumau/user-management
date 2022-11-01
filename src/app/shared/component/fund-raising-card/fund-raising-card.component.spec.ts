import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaisingCardComponent } from './fund-raising-card.component';

describe('FundRaisingCardComponent', () => {
  let component: FundRaisingCardComponent;
  let fixture: ComponentFixture<FundRaisingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundRaisingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundRaisingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
