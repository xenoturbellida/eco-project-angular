import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EcomarketService } from '@services/ecomarket.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MarketItem } from '@models/item.model';

export interface CardData {
	state: 'default' | 'flipped' | 'matched';
	data: MarketItem;
}


@Component({
  selector: 'app-eco-market-page',
  templateUrl: './eco-market-page.component.html',
  styleUrls: ['./eco-market-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('cardFlip', [
			state('default', style({
				transform: 'none'
			})),
			state('flipped', style({
				transform: 'rotateY(180deg)'
			})),
			transition('default => flipped', [
				animate('400ms')
			]),
			transition('flipped => default', [
				animate('200ms')
			])
		])
	]
})

export class EcoMarketPageComponent {

	@Input() cardItems: Array<CardData> = [];
	arrItems: Array<MarketItem> = this.ecomarketService.getGoods();

	constructor(private ecomarketService: EcomarketService) {
		this.arrItems.map(item => this.cardItems.push({
			state: 'default',
			data: item
		}))
	}

	// cards$ = this.ecomarketService.cards$

	cardHovered(value: CardData) {
		if (value.state === 'default') {
			value.state = 'flipped';
		} else {
			value.state = 'default';
		}
	}

	cardUnhovered(value: CardData) {
		if (value.state === 'flipped') {
			value.state = 'default';
		} else {
			value.state = 'flipped';
		}
	}
}
