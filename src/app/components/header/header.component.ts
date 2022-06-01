import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ModalAuthComponent } from '@components/modals/modal-auth/modal-auth.component';
import { DialogService } from '@services/dialog.service';
import { AuthService } from '@services/auth.service';
import { IUser } from '@pages/profile-page/profile-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	user: IUser | undefined;

  	constructor(
		  private dialog: DialogService,
		  public authService: AuthService,
		  public cdr: ChangeDetectorRef,
		  public router: Router,
	) { }

	ngOnInit(): void {
		  if (this.authService.isAuthorized) {
			  this.getProfile();
		  }
	}

	openAuthDialog() {
		this.dialog.openDialog(ModalAuthComponent);
	}

	getProfile(): void {
		this.authService.getProfile().subscribe(res => {
			this.user = res;
			this.cdr.markForCheck();
		}, err => {
			console.log(err);
		})
	}


}
