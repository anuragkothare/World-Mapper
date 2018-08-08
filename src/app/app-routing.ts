import { AllCountriesComponent } from './all-countries/all-countries.component';
import { AllRegionComponent } from './all-region/all-region.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { SingleCountryComponent } from './single-country/single-country.component';

const appRoutes: Routes = [
  { path: 'regions', component: AllRegionComponent },
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  { path: 'allcountries/:regionName', component: AllCountriesComponent },
  { path: 'allcountries/language/:languageCode', pathMatch: 'full' ,component: AllCountriesComponent },
  { path: 'allcountries/currency/:currencyCode', pathMatch: 'full' ,component: AllCountriesComponent },
  { path: 'country-view/:country.name', component: SingleCountryComponent },
  { path: '**', component: NotfoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
