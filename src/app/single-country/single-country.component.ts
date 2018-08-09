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
  public allCountries$

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

    // get countries of same region
    this._route.params.subscribe(param => {
      if(param['regionName']){
        console.log("region called " + param['regionName'] )
        this.allCountries$ = this._http.getAllCountriesByRegion(param['regionName'])
      }
      // get countries of same currency
      else if(param['currencyCode']){
        console.log("currenct called " + param['currencyCode'] )
        this.allCountries$ = this._http.getAllCountriesByCurrency(param['currencyCode'])
      }
      // get countries of same language
      else if(param['languageCode']){
        console.log("language called " + param['languageCode'] )
        this.allCountries$ = this._http.getAllCountriesByLanguage(param['languageCode'])
      }
  })

  }
}
