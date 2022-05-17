import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ModalEnterCodeComponent } from '@components/modals/modal-enter-code/modal-enter-code.component';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ErrorsHandlerService } from '@services/errors-handler.service';
import { ValidatePhone } from '@utils/validation.utils';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal-auth.component.html',
  styleUrls: ['./modal-auth.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAuthComponent {

	form: FormGroup;

	constructor(
	  private dialogRef: DialogRef<ModalAuthComponent>,
	  private dialog: DialogService,
	  private fb: FormBuilder,
	  private erHandler: ErrorsHandlerService,
	  ) {
		this.form = this.fb.group({
			phone: ['', [
				Validators.required,
				ValidatePhone,
			]],
			password: ['', [
				Validators.required,
				Validators.maxLength(50),
				Validators.minLength(8),
			]],
		})
		this.form.markAllAsTouched();
	}

	onSubmit(): void {
	  const password = this.form.get('password')?.value;
	  const phone = this.form.get('phone')?.value;
	  console.log('modal password', password);
	  console.log('modal phone', phone);
	  // Call API here
	  this.dialogRef.close({ phone: phone, password: password })
	}

	closeModal(): void {
		this.dialogRef.close();
	}

	openEnterCodeModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalEnterCodeComponent);
	}

	openRegModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegComponent);
	}

	openAuthPartnersModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthPartnersComponent);
	}

	control(name: string) {
		return this.form.get(name);
	}

	getError(errors: ValidationErrors | null | undefined): string | void {
		return this.erHandler.getError(errors);
	}
}
