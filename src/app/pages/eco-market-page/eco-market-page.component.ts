import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EcomarketService } from '@services/ecomarket.service';

@Component({
  selector: 'app-eco-market-page',
  templateUrl: './eco-market-page.component.html',
  styleUrls: ['./eco-market-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcoMarketPageComponent {

	cards$ = this.ecomarketService.cards$

  constructor(private ecomarketService: EcomarketService) { }
}
