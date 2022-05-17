import { Directive, Input } from '@angular/core';

@Directive({
	selector: '[appButton]',
	host: {
		'[class.btn--green]': "theme === 'GREEN'",
		'[class.btn--gray]' : "theme === 'GRAY'",
		'[class.btn--filter]': "theme === 'FILTER'",
		'[class.btn--link]': "theme === 'LINK'",
		'[class.btn--contentOnly]': "theme === 'CONTENT_ONLY'",
		'[class.btn--icon_left]': "iconPosition === 'left'",
		'[class.btn--partners]': "forPartners",
		'[type]': 'type',
		'[class]': "'btn'",
	}
})
export class ButtonDirective {
	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'GREEN' | 'GRAY' | 'SQUARE_GRAY'| 'FILTER' | 'LINK' | 'CONTENT_ONLY' = 'GREEN';
	@Input() iconPosition?: 'left';
	@Input() forPartners?: boolean = false;
}
