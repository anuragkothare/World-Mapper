import { appRouting } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllRegionComponent } from './all-region/all-region.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AllRegionComponent,
    NotfoundComponent,
    AllCountriesComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
