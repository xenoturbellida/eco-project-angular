import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-eco-market-card',
  templateUrl: './eco-market-card.component.html',
  styleUrls: ['./eco-market-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcoMarketCardComponent {
	@Input() photo?: string;
	@Input() title?: string;
	@Input() category?: string;
	@Input() price?: number;
	@Input() brand?: string;
}
