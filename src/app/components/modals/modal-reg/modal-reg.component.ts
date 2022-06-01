import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ModalEnterCodeComponent } from '@components/modals/modal-enter-code/modal-enter-code.component';
import { ModalAuthComponent } from '@components/modals/modal-auth/modal-auth.component';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';
import { ErrorsHandlerService } from '@services/errors-handler.service';
import { ValidatePhone } from "@utils/validation.utils";

@Component({
  selector: 'app-modal-reg',
  templateUrl: './modal-reg.component.html',
  styleUrls: ['./modal-reg.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalRegComponent {
	form: FormGroup;

	constructor(
		private dialogRef: DialogRef<ModalRegComponent>,
		private dialog: DialogService,
		private fb: FormBuilder,
		private toast: ToastService,
		private authService: AuthService,
		private erHandler: ErrorsHandlerService,
	) {
		this.form = this.fb.group({
			phone_number: ['', [
				Validators.required,
				ValidatePhone,
			]],
			password: ['', [Validators.required]],
		})
	}

	onSubmit(): void {
		if (!this.form.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}
		console.log(this.form.value);
		this.authService.registration(this.form.value).subscribe(res => {
			this.toast.success('Добро пожаловать');
			console.log(res);
		}, err => {
			console.log(err);
		})
		this.dialogRef.close(this.form.value);
		this.dialog.openDialog(ModalEnterCodeComponent);
	}

	closeModal(): void {
		this.dialogRef.close();
	}

	openAuthModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthComponent);
	}

	openAuthPartners(): void {
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
