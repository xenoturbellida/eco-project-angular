import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IHistoryEntry } from '@components/profile/history/history.interfaces';
import { history } from '@components/profile/history/history.mock';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {

	history: IHistoryEntry[];

	constructor() {
		this.history = history;
	}
}
