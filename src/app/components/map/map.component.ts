import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements AfterViewInit{

	map: any;

  constructor() { }

	public ngAfterViewInit(): void {
		this.initMap();
	}

	private initMap(): void {
		this.map = L.map('map').setView([55.783427, 49.122791], 12);
		const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			maxZoom: 15,
			tileSize: 512,
			zoomOffset: -1,
		});

		tiles.addTo(this.map)
	}
}
