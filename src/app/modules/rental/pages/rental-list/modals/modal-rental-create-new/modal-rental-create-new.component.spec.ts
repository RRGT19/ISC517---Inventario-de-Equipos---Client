import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentalCreateNewComponent } from './modal-rental-create-new.component';

describe('ModalRentalCreateNewComponent', () => {
  let component: ModalRentalCreateNewComponent;
  let fixture: ComponentFixture<ModalRentalCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRentalCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRentalCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
