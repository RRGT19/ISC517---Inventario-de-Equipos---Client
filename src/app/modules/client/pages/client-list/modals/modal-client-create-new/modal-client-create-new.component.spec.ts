import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientCreateNewComponent } from './modal-client-create-new.component';

describe('ModalClientCreateNewComponent', () => {
  let component: ModalClientCreateNewComponent;
  let fixture: ComponentFixture<ModalClientCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClientCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClientCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
