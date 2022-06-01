import { IHistoryEntry } from '@components/profile/history/history.interfaces';

export const history: IHistoryEntry[] = [
	{
		address: '​Казань, Кремлёвская, 88',
		content: [
			{
				material: 'Пластик',
				weight: 1,
				units: 'кг',
			},
			{
				material: 'Стекло',
				weight: 2,
				units: 'кг',
			},
			{
				material: 'Бумага',
				weight: 25,
				units: 'кг',
			},
		],
		date: '2022-05-30T18:41:43.124Z',
		income: 1000,
	},
	{
		address: '​Казань, проспект Победы, 141',
		content: [
			{
				material: 'Пластик',
				weight: 1,
				units: 'кг',
			},
			{
				material: 'Стекло',
				weight: 3,
				units: 'кг',
			},
			{
				material: 'Бумага',
				weight: 5,
				units: 'кг',
			},
		],
		date: '2022-05-30T18:41:43.124Z',
		income: 900,
	},
]
