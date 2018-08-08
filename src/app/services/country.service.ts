import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public baseUrl: string = "https://restcountries.eu/rest/v2"

  constructor(private _http: HttpClient ) {
    console.log("service constructor is called.")
  }

  // method to get all countries
  public getAllCountries(regionName): any{
    return this._http.get(this.baseUrl + '/region' +'/' + regionName)
  }

  // method to get single country details
  public getSingleCountryDetails(countryName): any{
    return this._http.get(this.baseUrl + '/name' +'/' + countryName + '?fullText=true')
  }

  // method to get all countries with common currency
  public getAllCountriesByCurrency(currencyCode): any{
    return this._http.get(this.baseUrl + '/currency' +'/' + currencyCode)
  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode): any{
    return this._http.get(this.baseUrl + '/lang' +'/' + languageCode)
  }


}
