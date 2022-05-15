import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';

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
	) {
		this.form = this.fb.group({
			org: ['', [Validators.required]],
			email: ['', [Validators.required]],
			password: ['', [Validators.required]],
		})
	}

	openAuthPartnersModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthPartnersComponent);
	}

	onSubmit(): void {
		const org = this.form.get('org')?.value;
		const password = this.form.get('password')?.value;
		const email = this.form.get('email')?.value;
		console.log('modal org', org);
		console.log('modal password', password);
		console.log('modal email', email);
		// Call API here
		this.dialogRef.close({ org: org, email: email, password: password })
	}
}
