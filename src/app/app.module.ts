import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectPointPageComponent } from '@pages/collect-point-page/collect-point-page.component';
import { EcoMarketPageComponent } from '@pages/eco-market-page/eco-market-page.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { InputComponent } from '@components/ui/input/input.component';
import { MainPageCardComponent } from '@components/cards/main-page-card/main-page-card.component';
import { SwiperComponent } from '@components/swiper/swiper.component';
import { SwiperCardComponent } from '@components/cards/swiper-card/swiper-card.component';
import { SwiperModule } from 'swiper/angular';
import { MapComponent } from '@components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { ModalAuthComponent } from '@components/modals/modal-auth/modal-auth.component';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ModalEnterCodeComponent } from '@components/modals/modal-enter-code/modal-enter-code.component';
import { ModalRegPartnersComponent } from '@components/modals/modal-reg-partners/modal-reg-partners.component';
import { ButtonDirective } from '@directives/button.directive';

@NgModule({
	declarations: [
		AppComponent,
		CollectPointPageComponent,
		EcoMarketPageComponent,
		MainPageComponent,
		ProfilePageComponent,
  		HeaderComponent,
  		FooterComponent,
    	InputComponent,
    	MainPageCardComponent,
    	SwiperComponent,
     	SwiperCardComponent,
      	MapComponent,
       	ModalContainerComponent,
       	ModalAuthComponent,
        ModalRegComponent,
        ModalAuthPartnersComponent,
        ModalEnterCodeComponent,
        ModalRegPartnersComponent,
        ButtonDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		BrowserAnimationsModule,
		DialogModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
