import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {FamilyService} from "../../../../family.service";

@Component({
  templateUrl: './modal-family-create-new.component.html',
  styleUrls: ['./modal-family-create-new.component.scss']
})
export class ModalFamilyCreateNewComponent implements OnInit {

  @Input() title = '';
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private familyService: FamilyService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required]
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

    this.familyService.create(this.form.value).toPromise().then(() => {
      this.activeModal.close()
      this.toastService.showSuccess('Familia guardada');
      this.familyService.reload();
    });

  }

}
