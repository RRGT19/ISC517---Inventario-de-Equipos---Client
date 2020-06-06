import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../../client.service";
import {ToastService} from "../../../../../../shared/services/toast.service";

@Component({
  templateUrl: './modal-client-create-new.component.html',
  styleUrls: ['./modal-client-create-new.component.scss']
})
export class ModalClientCreateNewComponent implements OnInit {

  @Input() title = '';
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private clientService: ClientService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      identification: ['', Validators.required],
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

    this.clientService.create(this.form.value).toPromise().then(() => {
      this.activeModal.close()
      this.toastService.showSuccess('Cliente guardado');
      this.clientService.reload();
    });
  }

}
