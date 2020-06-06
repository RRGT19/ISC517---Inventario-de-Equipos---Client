import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RentalService} from "../../../../rental.service";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {IRental} from "../../../../rental.models";
import Utils from "../../../../../../shared/utilities/Utils";
import {CustomValidators} from "../../../../../../shared/utilities/CustomValidators";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './modal-rental-deliver.component.html',
  styleUrls: ['./modal-rental-deliver.component.scss']
})
export class ModalRentalDeliverComponent implements OnInit, OnDestroy {

  @Input() title = '';
  @Input() rental: IRental;
  form: FormGroup;
  daysBetween: number;
  costToPay = 0;
  costDB: { id: number, isMark: boolean }[] = [];
  subscription: Subscription;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private rentalService: RentalService,
    private toastService: ToastService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.initForm();
    this.onEquipmentsValueChanges();
    this.daysBetween = Utils.daysBetween(new Date(this.rental.createdAt), new Date());
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  get equipmentsArray(): FormArray {
    return this.f.equipments as FormArray;
  }

  initForm() {
    this.form = this.fb.group({
      equipments: new FormArray([], CustomValidators.minSelectedCheckboxes())
    });

    this.rental.rentedEquipments.forEach((e, i) => {
      this.equipmentsArray.push(new FormControl(false));
      this.costDB.push({id: e.id, isMark: false});
    })
  }

  onEquipmentsValueChanges() {
    const sub = this.form.get('equipments').valueChanges.subscribe((statusArray: boolean[]) => {
      statusArray.forEach((status, i) => {
        const priceByDay = this.rental.rentedEquipments[i].equipment.priceByDay * this.daysBetween;

        if (status && !this.costDB[i].isMark) {
          this.costDB[i].isMark = true;
          this.costToPay += priceByDay;
        } else if (!status && this.costDB[i].isMark) {
          this.costDB[i].isMark = false;
          this.costToPay -= priceByDay;
        }
      });
    });
    this.subscription.add(sub);
  }

  /**
   * Executed When Form Is Submitted
   */
  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const toDeliver = this.costDB.filter(e => e.isMark);
    toDeliver.forEach(async e => {
      await this.rentalService.deliverEquipment(this.rental.id, e.id).toPromise();
    })

    this.activeModal.close()
    this.toastService.showSuccess('Renta guardada');
    setTimeout(() => {
      this.rentalService.reload();
    }, 1000);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
