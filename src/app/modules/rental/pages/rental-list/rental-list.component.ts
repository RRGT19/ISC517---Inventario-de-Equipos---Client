import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RentalService} from "../../rental.service";
import {ModalRentalCreateNewComponent} from "./modals/modal-rental-create-new/modal-rental-create-new.component";
import {ModalRentalDeliverComponent} from "./modals/modal-rental-deliver/modal-rental-deliver.component";
import {IRental} from "../../rental.models";

@Component({
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  constructor(
    public rentalService: RentalService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalRentalCreateNewComponent);
    modalRef.componentInstance.title = 'Crear renta';
  }

  openModalToDeliver(rental: IRental) {
    const modalRef = this.modalService.open(ModalRentalDeliverComponent);
    modalRef.componentInstance.title = 'Entregar equipo';
    modalRef.componentInstance.rental = rental;
  }

}
