import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEquipmentCreateNewComponent } from './modal-equipment-create-new.component';

describe('ModalEquipmentCreateNewComponent', () => {
  let component: ModalEquipmentCreateNewComponent;
  let fixture: ComponentFixture<ModalEquipmentCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEquipmentCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEquipmentCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
