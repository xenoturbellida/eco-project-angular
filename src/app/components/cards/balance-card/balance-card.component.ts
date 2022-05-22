import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceCardComponent {

	@Input() balance: string;

	constructor() {
		this.balance ="";
	}

}
