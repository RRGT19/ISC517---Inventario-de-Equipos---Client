import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EquipmentService} from "../../equipment.service";
import {ModalEquipmentCreateNewComponent} from "./modals/modal-equipment-create-new/modal-equipment-create-new.component";
import {IEquipment} from "../../equipment.models";

@Component({
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  constructor(
    public equipmentService: EquipmentService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openModalToCreate() {
    const modalRef = this.modalService.open(ModalEquipmentCreateNewComponent);
    modalRef.componentInstance.title = 'Crear equipo';
  }

  openModalToEdit(equipment: IEquipment) {
    const modalRef = this.modalService.open(ModalEquipmentCreateNewComponent);
    modalRef.componentInstance.title = 'Editar equipo';
    modalRef.componentInstance.equipment = equipment;
  }

}
