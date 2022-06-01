import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MapItem } from '@models/map-item.model';

@Component({
  selector: 'app-map-small-card',
  templateUrl: './map-small-card.component.html',
  styleUrls: ['./map-small-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapSmallCardComponent{

  constructor() { }

	@Input() mapItem: MapItem | null = null;
}
