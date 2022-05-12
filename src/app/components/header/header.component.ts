import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalAuthComponent } from '@components/modals/modal-auth/modal-auth.component';
import { DialogService } from '@services/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  	constructor(private dialog: DialogService) { }

	openSimpleDialog() {
		this.dialog.openDialog(ModalAuthComponent);
	}

}
