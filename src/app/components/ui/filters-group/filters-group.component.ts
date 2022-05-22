import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FiltersService } from '@services/filters.service';

@Component({
  selector: 'app-filters-group',
  templateUrl: './filters-group.component.html',
  styleUrls: ['./filters-group.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersGroupComponent {

	filters$ = this.filtersService.filters$;

  constructor(private filtersService: FiltersService) { }

}
