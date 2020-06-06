import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SubfamilyService} from "../../../../../subfamily/subfamily.service";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {IEquipment} from "../../../../equipment.models";
import {EquipmentService} from "../../../../equipment.service";

@Component({
  templateUrl: './modal-equipment-create-new.component.html',
  styleUrls: ['./modal-equipment-create-new.component.scss']
})
export class ModalEquipmentCreateNewComponent implements OnInit {

  @Input() title = '';
  @Input() equipment: IEquipment | null = null;
  isEdition: boolean = null;
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public subfamilyService: SubfamilyService,
    private equipmentService: EquipmentService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    // Finds the purpose of this component
    (this.equipment) ? this.isEdition = true : this.isEdition = false;
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      stock: [0, Validators.required],
      priceByDay: [0, Validators.required],
      photo: [null],
      subFamily: this.fb.group({
        id: [null, Validators.required]
      })
    });

    if (this.isEdition) {
      this.form.patchValue(this.equipment);
    }
  }

  /**
   * Executed When Form Is Submitted
   */
  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // If the reason is edit
    if (this.isEdition) {
      this.equipmentService.update({id: this.equipment.id, ...this.form.value}).toPromise().then(() => {
        this.activeModal.close()
        this.toastService.showSuccess('Equipo editado');
        this.equipmentService.reload();
      });
    } else {
      this.equipmentService.create(this.form.value).toPromise().then(() => {
        this.activeModal.close()
        this.toastService.showSuccess('Equipo guardado');
        this.equipmentService.reload();
      });
    }

  }

}
