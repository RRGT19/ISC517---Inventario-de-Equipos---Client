import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SubfamilyService} from "../../subfamily.service";
import {ModalSubfamilyCreateNewComponent} from "./modals/modal-subfamily-create-new/modal-subfamily-create-new.component";

@Component({
  templateUrl: './subfamily-list.component.html',
  styleUrls: ['./subfamily-list.component.scss']
})
export class SubfamilyListComponent implements OnInit {

  constructor(
    public subfamilyService: SubfamilyService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalSubfamilyCreateNewComponent);
    modalRef.componentInstance.title = 'Crear subfamilia';
  }

}
