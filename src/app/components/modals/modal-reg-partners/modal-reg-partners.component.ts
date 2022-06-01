import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ErrorsHandlerService } from '@services/errors-handler.service';

@Component({
  selector: 'app-modal-reg-partners',
  templateUrl: './modal-reg-partners.component.html',
  styleUrls: ['./modal-reg-partners.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalRegPartnersComponent {

	form: FormGroup;

	constructor(
		private dialogRef: DialogRef<ModalRegPartnersComponent>,
		private dialog: DialogService,
		private fb: FormBuilder,
		private erHandler: ErrorsHandlerService,
	) {
		this.form = this.fb.group({
			org: ['', [
				Validators.required,
				Validators.minLength(1)
			]],
			email: ['', [
				Validators.required,
				Validators.email,
			]],
			password: ['', [
				Validators.required,
				Validators.maxLength(50),
				Validators.minLength(6),
			]],
		})
	}

	openAuthPartnersModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthPartnersComponent);
	}

	onSubmit(): void {
		// Call API here
		this.dialogRef.close(this.form.value);
	}

	closeModal(): void {
		this.dialogRef.close();
	}

	control(name: string) {
		return this.form.get(name);
	}

	getError(errors: ValidationErrors | null | undefined): string | void {
		return this.erHandler.getError(errors);
	}
}
