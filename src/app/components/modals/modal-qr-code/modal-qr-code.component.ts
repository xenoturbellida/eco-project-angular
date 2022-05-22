import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { ModalRegPartnersComponent } from '@components/modals/modal-reg-partners/modal-reg-partners.component';
import { FormBuilder, ValidationErrors } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';
import { ErrorsHandlerService } from '@services/errors-handler.service';

@Component({
  selector: 'app-modal-qr-code',
  templateUrl: './modal-qr-code.component.html',
  styleUrls: ['./modal-qr-code.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalQrCodeComponent {

  constructor(
	  private dialogRef: DialogRef<ModalQrCodeComponent>,
	  private dialog: DialogService,
	  private erHandler: ErrorsHandlerService,
	  ) { }

	closeModal(): void {
		this.dialogRef.close();
	}
}
