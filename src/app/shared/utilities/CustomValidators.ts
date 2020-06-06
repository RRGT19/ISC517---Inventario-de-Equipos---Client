import {FormArray, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  // Custom validator to make sure that the user has selected at least 1 checkbox
  static minSelectedCheckboxes(minimumSelected: number = 1): ValidatorFn {
    return (formArray: FormArray): ValidationErrors | null => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= minimumSelected ? null : {required: true};
    };
  }

}
