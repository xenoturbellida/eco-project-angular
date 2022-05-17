import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';

@Component({
  selector: 'app-modal-enter-code',
  templateUrl: './modal-enter-code.component.html',
  styleUrls: ['./modal-enter-code.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalEnterCodeComponent {
	form: FormGroup;

	constructor(
	  private dialogRef: DialogRef<ModalEnterCodeComponent>,
	  private dialog: DialogService,
	  private fb: FormBuilder,
	  ) {
	  this.form = this.fb.group({
		  code: ['', [Validators.required]]
	  })
	}

	onSubmit(): void {
	  const code = this.form.get('code')?.value;
	  console.log('modal code', code);
	  // Call API here
	  this.dialogRef.close({ code: code });
	}

	openRegModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegComponent);
	}

	openAuthPartners(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthPartnersComponent);
	}
}
