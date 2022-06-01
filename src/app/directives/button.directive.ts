import { Directive, Input } from '@angular/core';

@Directive({
	selector: '[appButton]',
	host: {
		'[class.btn--green]': "theme === 'GREEN'",
		'[class.btn--gray]' : "theme === 'GRAY'",
		'[class.btn--filter]': "theme === 'FILTER'",
		'[class.btn--link]': "theme === 'LINK'",
		'[class.btn--contentOnly]': "theme === 'CONTENT_ONLY'",
		'[class.btn--tab]': "theme === 'TAB'",
		'[class.btn--icon_left]': "iconPosition === 'left'",
		'[class.btn--partners]': "forPartners",
		'[class.btn__mini]': "mini",
		'[type]': 'type',
		'[class]': "'btn'",
	}
})
export class ButtonDirective {
	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'GREEN' | 'GRAY' | 'SQUARE_GRAY'| 'FILTER' | 'LINK' | 'CONTENT_ONLY' | "TAB" = 'GREEN';
	@Input() iconPosition?: 'left';
	@Input() forPartners?: boolean = false;
	@Input() mini?: boolean = false;
}
