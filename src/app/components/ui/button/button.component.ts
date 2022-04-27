import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

	@Input() type: 'submit' | 'button' | 'reset' = 'button';
	@Input() theme: 'GREEN' | 'GREY' | 'FILTER' = 'GREEN';

}
