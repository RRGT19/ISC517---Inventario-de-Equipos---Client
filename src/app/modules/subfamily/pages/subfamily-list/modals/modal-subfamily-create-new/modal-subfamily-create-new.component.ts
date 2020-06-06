import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {SubfamilyService} from "../../../../subfamily.service";
import {FamilyService} from "../../../../../family/family.service";

@Component({
  templateUrl: './modal-subfamily-create-new.component.html',
  styleUrls: ['./modal-subfamily-create-new.component.scss']
})
export class ModalSubfamilyCreateNewComponent implements OnInit {

  @Input() title = '';
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public familyService: FamilyService,
    private subfamilyService: SubfamilyService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      family: this.fb.group({
        id: [null, Validators.required]
      })
    });
  }

  /**
   * Executed When Form Is Submitted
   */
  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.subfamilyService.create(this.form.value).toPromise().then(() => {
      this.activeModal.close()
      this.toastService.showSuccess('SubFamilia guardada');
      this.subfamilyService.reload();
    });

  }

}
