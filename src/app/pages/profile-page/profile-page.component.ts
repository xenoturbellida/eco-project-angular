import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '@services/auth.service';

export interface IUser {
	id: string,
	photo_url?: string | null,
	firstname?: string | null,
	lastname?: string | null,
	username?: string | null,
	email?: string | null,
	phone_number: string,
	balance?: number | null,
	role: {
		localizedName: 'string',
		name: 'USER' | 'ADMIN',
	},
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit{

	user: IUser | undefined;
	displayComponent: 'history' | 'promo-codes';

	constructor(
		private cdr: ChangeDetectorRef,
		private authService: AuthService,
		)
	{
		this.displayComponent = 'promo-codes';
	}

	ngOnInit(): void {
		this.getProfile();
	}

	getProfile(): void {
		this.authService.getProfile().subscribe(res => {
			this.user = res;
			console.log(this.user);
			this.cdr.markForCheck();
		}, err => {
			console.log(err);
		})
	}
}
