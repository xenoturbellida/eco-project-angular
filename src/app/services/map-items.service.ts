import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MapItem } from '@models/map-item.model';

const MapItemsMock: Array<MapItem> = [
	{
		id: 1,
		photo: '../../assets/map_item_small_photo.svg',
		address: 'ул.Кремлёвская, 88',
		fullAddress: 'Казань, Кремлёвская, 88',
		positionX: 55.79130,
		positionY: 49.121483,
		phone: '+7 (917) 888 88 88',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
		shop:'NIKE',
		items:['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
	{
		id: 2,
		photo: '../../assets/map_item_small_photo.svg',
		address: 'ул.Кремлёвская, 35',
		fullAddress: 'Казань, Кремлёвская, 35',
		positionX: 55.79130,
		positionY: 49.121483,
		phone: '+7 (917) 355 35 35',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
		shop:'H&M',
		items:['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
	{
		id: 3,
		photo:'../../assets/map_item_small_photo.svg',
		address: 'ул.Кремлёвская, 21',
		fullAddress: 'Казань, Кремлёвская, 21',
		positionX: 55.79130,
		positionY: 49.121483,
		phone: '+7 (917) 211 21 21',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
		shop:'NIKE',
		items:['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
	{
		id: 4,
		photo: '../../assets/map_item_small_photo.svg',
		address: 'ул.Кремлёвская, 21',
		fullAddress: 'Казань, Кремлёвская, 21',
		positionX: 55.79130,
		positionY: 49.121483,
		phone: '+7 (917) 211 21 21',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
		shop:'Adidas',
		items:['Пластик: от 5 кг', 'Стекло: от 2 кг']
	}
]

@Injectable({
	providedIn: 'root'
})
export class MapItemsService {
	mapItems$: BehaviorSubject<Array<MapItem>> = new BehaviorSubject<Array<MapItem>>(MapItemsMock);
}
