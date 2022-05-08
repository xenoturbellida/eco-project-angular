import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
