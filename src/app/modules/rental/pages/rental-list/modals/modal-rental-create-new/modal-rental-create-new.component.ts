import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {RentalService} from "../../../../rental.service";
import {ClientService} from "../../../../../client/client.service";
import {EquipmentService} from "../../../../../equipment/equipment.service";
import {IEquipment} from "../../../../../equipment/equipment.models";
import Utils from "../../../../../../shared/utilities/Utils";
import {IRental} from "../../../../rental.models";

@Component({
  templateUrl: './modal-rental-create-new.component.html',
  styleUrls: ['./modal-rental-create-new.component.scss']
})
export class ModalRentalCreateNewComponent implements OnInit {

  @Input() title = '';
  form: FormGroup;
  equipmentSelected: IEquipment = null;
  equipmentsSelected: IEquipment[] = [];

  // Min selectable date for Datepicker's
  minDate: NgbDateStruct = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate() + 1 // Sum a day on purpose
  };

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public equipmentService: EquipmentService,
    public clientService: ClientService,
    private rentalService: RentalService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  get rentedEquipmentsArray(): FormArray {
    return this.f.rentedEquipments as FormArray;
  }

  initForm() {
    this.form = this.fb.group({
      client: [null, Validators.required],
      dateOfReturn: [null, Validators.required],
      rentedEquipments: new FormArray([], Validators.required)
    });
  }

  onEquipmentChange(equipment: IEquipment) {
    this.equipmentSelected = equipment;
  }

  trackById(index: number, item: any) {
    return item.id
  }

  addNewEquipment() {
    this.rentedEquipmentsArray.push(
      this.fb.group({
        equipment: this.fb.group({
          id: [this.equipmentSelected.id]
        })
      })
    );
    this.equipmentsSelected.push(this.equipmentSelected);
  }

  deleteEquipment(index: number) {
    this.rentedEquipmentsArray.removeAt(index);
    this.equipmentsSelected.splice(index, 1);
  }

  /**
   * Executed When Form Is Submitted
   */
  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const rental: Partial<IRental> = {
      client: this.f.client.value,
      dateOfReturn: Utils.transformDateStructToDate(this.f.dateOfReturn.value),
      rentedEquipments: this.rentedEquipmentsArray.value
    }

    this.rentalService.create(rental).toPromise().then(() => {
      this.activeModal.close()
      this.toastService.showSuccess('Renta guardada');
      this.rentalService.reload();
    });

  }

}
