import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { CollectPointPageComponent } from '@pages/collect-point-page/collect-point-page.component';
import { EcoMarketPageComponent } from '@pages/eco-market-page/eco-market-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';

const routes: Routes = [
	{
		path: '',
		component: MainPageComponent,
	},
	{
		path: 'collect_point',
		component: CollectPointPageComponent,
	},
	{
		path: 'eco_market',
		component: EcoMarketPageComponent,
	},
	{
		path: 'profile',
		component: ProfilePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
