import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { IPromoCode } from '@components/profile/promoCodes/promo-codes.interfaces';
import { promoCodesMock } from '@components/profile/promoCodes/promo-codes.mock';

@Component({
  selector: 'app-promo-codes',
  templateUrl: './promo-codes.component.html',
  styleUrls: ['./promo-codes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCodesComponent implements OnInit {

	promoCodes: IPromoCode[] | undefined

	constructor(
		private cdr: ChangeDetectorRef,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.getPromoCodes();
	}

	getPromoCodes(): any {
		this.authService.getPromoCodes().subscribe(res => {
			this.promoCodes = res;
			if (res.length === 0) {
				this.promoCodes = promoCodesMock;
			}
			this.cdr.markForCheck();
		}, err => {
			console.log(err)
		})
	}
}
