import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubfamilyCreateNewComponent } from './modal-subfamily-create-new.component';

describe('ModalSubfamilyCreateNewComponent', () => {
  let component: ModalSubfamilyCreateNewComponent;
  let fixture: ComponentFixture<ModalSubfamilyCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubfamilyCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubfamilyCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
