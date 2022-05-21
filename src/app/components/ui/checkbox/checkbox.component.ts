import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {

	@Input() index?: number;
	@Input() isChecked: boolean;
	@Input() name: string;
	@Input() checkHandler:any;


	constructor() {
		this.name ="";
		this.isChecked=false;
		this.checkHandler="";
	}

  ngOnInit(): void {
  }

}
