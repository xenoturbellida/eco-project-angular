import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class SwiperComponent {
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
		loop: true,
		autoplay: true,
	}
}
