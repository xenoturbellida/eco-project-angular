import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandlerService {

	getError(errors: ValidationErrors | null | undefined): string | void {
		if (errors == null) return

		const firstError = Object.entries(errors)[0];
		const errorName = firstError[0];
		const errorValue = firstError[1];

		let message;
		switch(errorName) {
			case 'required': message = "Обязательное поле"; break;
			case 'minlength': message = `Не меньше ${errorValue.requiredLength} символов`; break;
			case 'maxlength': message = `Не больше ${errorValue.requiredLength} символов` ; break;
			case 'phoneNumberInvalid': message = 'Неверный номер телефона'; break;
			case 'email': message = "Неверная электронная почта"; break;
			case 'pattern': message = "Неверный формат"; break;
			default: message = `${errorName}: ${errorValue}`;
		}

		return message;
	}
}
