import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserCreateNewComponent } from './modal-user-create-new.component';

describe('ModalUserCreateNewComponent', () => {
  let component: ModalUserCreateNewComponent;
  let fixture: ComponentFixture<ModalUserCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
