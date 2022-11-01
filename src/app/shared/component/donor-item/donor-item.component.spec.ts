import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorItemComponent } from './donor-item.component';

describe('DonorItemComponent', () => {
  let component: DonorItemComponent;
  let fixture: ComponentFixture<DonorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
