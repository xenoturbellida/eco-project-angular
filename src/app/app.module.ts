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
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { PromoCodesComponent } from '@components/profile/promoCodes/promo-codes.component';
import { HistoryComponent } from '@components/profile/history/history.component';
import { EcoMarketCardComponent } from './components/cards/eco-market-card/eco-market-card.component';
import { CheckboxComponent } from './components/ui/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './components/ui/checkbox-group/checkbox-group.component';
import { BalanceCardComponent } from './components/cards/balance-card/balance-card.component';
import { ModalQrCodeComponent } from './components/modals/modal-qr-code/modal-qr-code.component';
import { FiltersGroupComponent } from './components/ui/filters-group/filters-group.component';
import { MapSmallCardComponent } from './components/cards/map-small-card/map-small-card.component';
import { DropDownListComponent } from './components/ui/drop-down-list/drop-down-list.component';
import { SearchInputComponent } from './components/ui/search-input/search-input.component';

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
        PromoCodesComponent,
        HistoryComponent,
        EcoMarketCardComponent,
        CheckboxComponent,
        CheckboxGroupComponent,
        BalanceCardComponent,
        ModalQrCodeComponent,
        FiltersGroupComponent,
        MapSmallCardComponent,
        DropDownListComponent,
        SearchInputComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		BrowserAnimationsModule,
		DialogModule,
		ReactiveFormsModule,
		HttpClientModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			progressBar: true,
			positionClass: 'toast-bottom-center'
		}),
		BrowserAnimationsModule,
		ToastContainerModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UrlInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
