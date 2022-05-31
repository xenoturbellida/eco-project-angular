export interface IHistoryEntry {
	address: string,
	content:
		{
			material: string,
			weight: number,
			units: string,
		}[]
	,
	date: string | Date,
	income: number,
}
