import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfamilyListComponent } from './subfamily-list.component';

describe('SubfamilyListComponent', () => {
  let component: SubfamilyListComponent;
  let fixture: ComponentFixture<SubfamilyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfamilyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
