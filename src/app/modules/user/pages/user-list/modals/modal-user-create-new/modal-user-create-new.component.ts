import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../../../../../shared/services/toast.service";
import {UserService} from "../../../../user.service";

@Component({
  templateUrl: './modal-user-create-new.component.html',
  styleUrls: ['./modal-user-create-new.component.scss']
})
export class ModalUserCreateNewComponent implements OnInit {

  @Input() title = '';
  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
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

    this.userService.create(this.form.value).toPromise().then(() => {
      this.activeModal.close()
      this.toastService.showSuccess('Usuario guardado');
      this.userService.reload();
    });

  }

}
