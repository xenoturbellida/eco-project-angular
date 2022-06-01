import { Injectable } from '@angular/core';

export interface FilterItem {
	name: string;
	checked: boolean;
}

const filtersMock: Array<FilterItem> = [
	{ name: 'По популярности', checked: false },
	{ name: 'По цене', checked: false },
	{ name: 'По новизне', checked: false }
];


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

const materialsMock: Array<FilterItem> = [
	{ name: 'Бумага', checked: false },
	{ name: 'Пластик', checked: false },
	{ name: 'Дерево', checked: false },
];

@Injectable({
	providedIn: 'root'
})
export class FiltersService {

	genders$: Array<FilterItem> = gendersMock;
	categories$: Array<FilterItem> = categoriesMock;
	brands$: Array<FilterItem> = brandsMock;
	filters$: Array<FilterItem> = filtersMock;
	materials$: Array<FilterItem> = materialsMock;

	constructor() {
	}
}
