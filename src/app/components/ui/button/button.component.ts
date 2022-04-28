import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'GREEN' | 'GRAY' | 'SQUARE_GRAY'| 'FILTER' = 'GREEN';

}
