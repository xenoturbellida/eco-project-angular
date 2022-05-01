import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperCardComponent implements OnInit {

	@Input() title: string;
	@Input() text: string;
	@Input() btnText: string;
	@Input() background: string;
	@Input() img: string;

	constructor() {
		this.title = '';
		this.text = '';
		this.btnText = '';
		this.img = '';
		this.background ='';
	}

	ngOnInit(): void {
	}

}
