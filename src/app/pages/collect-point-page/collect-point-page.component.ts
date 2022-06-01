import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MapItemsService } from '@services/map-items.service';
import { FiltersService } from '@services/filters.service';

@Component({
  selector: 'app-collect-point-page',
  templateUrl: './collect-point-page.component.html',
  styleUrls: ['./collect-point-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectPointPageComponent implements OnInit {


	constructor(
		private mapItemsService: MapItemsService,
		private filtersService: FiltersService
	) {
	}

	brands$ = this.filtersService.brands$
	materials$ = this.filtersService.materials$
	mapItems$ = this.mapItemsService.mapItems$

  ngOnInit(): void {
  }

}
