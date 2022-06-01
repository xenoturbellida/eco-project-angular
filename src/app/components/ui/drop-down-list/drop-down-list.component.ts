import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FilterItem, FiltersService } from '@services/filters.service';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownListComponent {

	@Input() items: Array<FilterItem>;
	@Input() name: string;


  constructor() {
	  this.items = []
	  this.name=''
  }
}
