import { Injectable } from '@angular/core';

interface FilterItem {
	name: string;
	checked: boolean;
}

const gendersMock: Array<FilterItem> = [
	{ name: 'Мужской', checked: false },
	{ name: 'Женский', checked: false }
];

const categoriesMock: Array<FilterItem> = [
	{ name: 'Одежда', checked: false },
	{ name: 'Обувь', checked: false },
	{ name: 'Аксессуары', checked: false }
]

const brandsMock: Array<FilterItem> = [
	{ name: 'H&M', checked: false },
	{ name: 'P&B', checked: false },
	{ name: 'Adidas', checked: false },
	{ name: 'Nike', checked: false },
	{ name: 'Rebook', checked: false }
]

@Injectable({
	providedIn: 'root'
})
export class FiltersService {

	genders$: Array<FilterItem> = gendersMock;
	categories$: Array<FilterItem> = categoriesMock;
	brands$: Array<FilterItem> = brandsMock;

	constructor() {
	}
}
