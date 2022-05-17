import { AbstractControl } from '@angular/forms';

export const ValidatePhone = (control: AbstractControl): {[key: string]: any} | null => {
	if (control.value && control.value.length != 11) {
		return { 'phoneNumberInvalid': true };
	}
	return null;
}
