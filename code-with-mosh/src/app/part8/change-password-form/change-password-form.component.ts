import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, this.matchValidator('1234')),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required, this.matchValidator())
  })

  get oldPassword() {
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

  matchValidator(match?: string): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        if (match && control.value !== match) {
          console.log(match, control.value)
          resolve({ doesNotMatch: true })
        }
        else if (!match && control.value !== this.newPassword.value) {
          resolve({ doesNotMatch: true });
        }
        else resolve(null);
      });
    }
  }
}
