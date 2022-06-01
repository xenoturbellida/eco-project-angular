import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ErrorsHandlerService } from '@services/errors-handler.service';

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
	  private erHandler: ErrorsHandlerService,
	  ) {
	  this.form = this.fb.group({
		  code: ['', [Validators.required]]
	  })
	}

	onSubmit(): void {
	  this.dialogRef.close(this.form.value);
	}

	closeModal(): void {
		this.dialogRef.close();
	}

	openRegModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegComponent);
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
