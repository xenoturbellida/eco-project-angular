export interface IPromoCode {
	getting_date_time: string | Date,
	activation_date_time: string | Date,
	is_activated: boolean,
	item_url: string,
	qr_url: string,
	price: number,
}
