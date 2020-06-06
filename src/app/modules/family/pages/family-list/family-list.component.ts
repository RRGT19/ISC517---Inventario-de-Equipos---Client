import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalFamilyCreateNewComponent} from "./modals/modal-family-create-new/modal-family-create-new.component";
import {FamilyService} from "../../family.service";

@Component({
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  constructor(
    public familyService: FamilyService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalFamilyCreateNewComponent);
    modalRef.componentInstance.title = 'Crear familia';
  }

}
