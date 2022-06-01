import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@utils/local-storage';

interface AuthParams {
	login: string;
	password: string;
}

interface User {
	phone_number: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	@LocalStorage() user?: any | null;
	@LocalStorage() token?: string | null;

	constructor(
		private http: HttpClient
	) {
	}

	authorize(credentials: AuthParams): Observable<any> {
		return this.http.post('login', credentials);
	}

	registration(data: User): Observable<any> {
		return this.http.post('account', data);
	}

	getProfile(): Observable<any> {
		return this.http.get('profile');
	}

	get isAuthorized(): boolean {
		return this.token !== null;
	}

	saveToStorage(res: any): void {
		this.token = res.access_token;
	}

	getPromoCodes(): Observable<any> {
		return this.http.get('promo-codes/eco-rus/api/v1/promo-codes');
	}
}
