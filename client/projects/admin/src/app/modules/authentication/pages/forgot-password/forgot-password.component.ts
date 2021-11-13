import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPassword } from '@xyz/admin/modules/core/models';
import { isFormControlValid, markFormGroupTouched } from '@xyz/admin/modules/core/utils';
import { buildForgotPasswordForm } from './forgot-password-form.builder';

@Component({
  selector: 'xyz-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public isFormControlValid: Function;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.forgotPasswordForm = buildForgotPasswordForm(this._formBuilder);
    this.isFormControlValid = isFormControlValid;
  }

  ngOnInit(): void {
  }

  public submitForm(forgotPassword: ForgotPassword): void {
    markFormGroupTouched(this.forgotPasswordForm);
    if (this.forgotPasswordForm.invalid) return;
    this._router.navigate(['/auth', 'login']);
  }

}
