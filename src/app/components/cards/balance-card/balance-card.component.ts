import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { ModalQrCodeComponent } from '@components/modals/modal-qr-code/modal-qr-code.component';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceCardComponent {

	@Input() balance: string;

	constructor(private dialog: DialogService) {
		this.balance ="";
	}

	openQRCodeDialog() {
		this.dialog.openDialog(ModalQrCodeComponent);
	}

}
