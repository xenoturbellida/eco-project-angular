import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FiltersService } from '@services/filters.service';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupComponent {

	genders$ = this.filtersService.genders$;
	categories$ = this.filtersService.categories$;
	brands$ = this.filtersService.brands$;

	constructor(private filtersService: FiltersService) {
	}

}
