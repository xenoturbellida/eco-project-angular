import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from '@components/ui/button/button.component';
import { CollectPointPageComponent } from '@pages/collect-point-page/collect-point-page.component';
import { EcoMarketPageComponent } from '@pages/eco-market-page/eco-market-page.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/ui/input/input.component';

@NgModule({
	declarations: [
		AppComponent,
		ButtonComponent,
		CollectPointPageComponent,
		EcoMarketPageComponent,
		MainPageComponent,
		ProfilePageComponent,
  		HeaderComponent,
  		FooterComponent,
    InputComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
