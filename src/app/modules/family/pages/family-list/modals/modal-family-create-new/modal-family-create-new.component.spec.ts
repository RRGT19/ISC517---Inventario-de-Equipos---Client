import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFamilyCreateNewComponent } from './modal-family-create-new.component';

describe('ModalFamilyCreateNewComponent', () => {
  let component: ModalFamilyCreateNewComponent;
  let fixture: ComponentFixture<ModalFamilyCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFamilyCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFamilyCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
