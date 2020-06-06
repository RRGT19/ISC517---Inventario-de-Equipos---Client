import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentalDeliverComponent } from './modal-rental-deliver.component';

describe('ModalRentalDeliverComponent', () => {
  let component: ModalRentalDeliverComponent;
  let fixture: ComponentFixture<ModalRentalDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRentalDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRentalDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
