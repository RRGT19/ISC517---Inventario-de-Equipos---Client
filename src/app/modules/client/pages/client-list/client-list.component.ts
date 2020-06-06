import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../client.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalClientCreateNewComponent} from "./modals/modal-client-create-new/modal-client-create-new.component";

@Component({
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
    public clientService: ClientService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalClientCreateNewComponent);
    modalRef.componentInstance.title = 'Crear cliente';
  }

}
