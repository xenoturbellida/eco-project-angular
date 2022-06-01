import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MarketItem } from '@models/item.model';


const marketItemsMock: Array<MarketItem> = [
	{
		id: 0,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto1.jpg',
		title: 'Nike Air Max 2021',
		category: 'Мужская обувь',
		price: 1000,
		rating: 7,
		date: '2020-12-10'
	},
	{
		id: 1,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto2.jpg',
		title: 'Nike Air Max 90 Premium',
		category: 'Мужская обувь',
		price: 750,
		rating: 5.4,
		date: '2022-01-03'
	},
	{
		id: 2,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto3.jpg',
		title: 'Nike Air Max 2021',
		category: 'Мужская обувь',
		price: 1000,
		rating: 6.8,
		date: '2021-11-21'
	},
	{
		id: 3,
		brand: 'ADIDAS',
		photo: '../../assets/marketItemPhoto4.jpg',
		title: 'Adidas Alphabounce RC',
		category: 'Мужская обувь',
		price: 1200,
		rating: 9,
		date: '2022-03-23'
	},
	{
		id: 4,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto5.jpg',
		title: 'Nike Air Max 2021',
		category: 'Мужская обувь',
		price: 1000,
		rating: 7.5,
		date: '2021-05-12'
	},
	{
		id: 5,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto1.jpg',
		title: 'Nike Air Force 1 Low',
		category: 'Мужская обувь',
		price: 2100,
		rating: 8,
		date: '2022-01-18'
	},
	{
		id: 6,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto1.jpg',
		title: 'Nike Air Max 2021',
		category: 'Мужская обувь',
		price: 1000,
		rating: 8.1,
		date: '2021-04-11'
	},
	{
		id: 7,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto2.jpg',
		title: 'Nike Air Max 90 Premium',
		category: 'Мужская обувь',
		price: 750,
		rating: 7,
		date: '2022-03-28'
	},
	{
		id: 8,
		brand: 'ADIDAS',
		photo: '../../assets/marketItemPhoto4.jpg',
		title: 'Adidas Alphabounce RC',
		category: 'Мужская обувь',
		price: 1200,
		rating: 5.9,
		date: '2021-12-13'
	},
	{
		id: 9,
		brand: 'NIKE',
		photo: '../../assets/marketItemPhoto2.jpg',
		title: 'Nike Air Max 90 Premium',
		category: 'Мужская обувь',
		price: 750,
		rating: 7.8,
		date: '2020-12-22'
	}
]

@Injectable({
	providedIn: 'root'
})
export class EcomarketService {
	// cards$ :BehaviorSubject<Array<MarketItem>> = new BehaviorSubject<Array<MarketItem>>(marketItemsMock);

	getGoods() {
		return marketItemsMock;
	}


	constructor() {
	}
}
