import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { ModalRegPartnersComponent } from '@components/modals/modal-reg-partners/modal-reg-partners.component';

@Component({
  selector: 'app-modal-auth-partners',
  templateUrl: './modal-auth-partners.component.html',
  styleUrls: ['./modal-auth-partners.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAuthPartnersComponent {

	form: FormGroup;

	constructor(
		private dialogRef: DialogRef<ModalAuthPartnersComponent>,
		private dialog: DialogService,
		private fb: FormBuilder,
	) {
		this.form = this.fb.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]],
		})
	}

	onSubmit(): void {
		const password = this.form.get('password')?.value;
		const email = this.form.get('email')?.value;
		console.log('modal password', password);
		console.log('modal email', email);
		// Call API here
		this.dialogRef.close({ email: email, password: password })
	}

	openRegModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegComponent);
	}

	openRegPartnersModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegPartnersComponent);
	}
}
