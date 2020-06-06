import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPendingListComponent } from './rental-pending-list.component';

describe('RentalPendingListComponent', () => {
  let component: RentalPendingListComponent;
  let fixture: ComponentFixture<RentalPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
