import { CountryService } from './../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  public currentCountry;
  public allCountries

  constructor(private _route: ActivatedRoute, private router: Router, public _http: CountryService) {
    console.log("Single Country constructor called.")
   }

  ngOnInit() {
    // to get single country details
    let country_name = this._route.snapshot.paramMap.get('country.name');
    console.log(country_name);

    this._http.getSingleCountryDetails(country_name).subscribe(

      data => {
        console.log(data);
        this.currentCountry = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    // get countries of same currency
    let currency_code = this._route.snapshot.paramMap.get('currencyCode');
    console.log(currency_code);

    this._http.getAllCountriesByCurrency(currency_code).subscribe(
      data => {
        console.log(data);
        this.allCountries = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    // get countries of same language
    let language_code = this._route.snapshot.paramMap.get('languageCode');
    console.log(language_code);

    this._http.getAllCountriesByLanguage(language_code).subscribe(

      data => {
        console.log(data);
        this.allCountries = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

  }
}
