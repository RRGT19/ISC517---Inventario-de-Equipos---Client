import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../user.service";
import {ModalUserCreateNewComponent} from "./modals/modal-user-create-new/modal-user-create-new.component";

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    public userService: UserService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalUserCreateNewComponent);
    modalRef.componentInstance.title = 'Crear usuario';
  }

}
