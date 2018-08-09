import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../Model/Country'
import { shallowEqualArrays } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public baseUrl: string = "https://restcountries.eu/rest/v2"

  constructor(private _http: HttpClient ) {
    console.log("service constructor is called.")
  }

  // method to get all countries by region
  public getAllCountriesByRegion(regionName): any{
    return this._http.get<Country[]>(this.baseUrl + '/region' +'/' + regionName)
  }

  // method to get single country details
  public getSingleCountryDetails(countryName): any{
    return this._http.get<Country[]>(this.baseUrl + '/name' +'/' + countryName + '?fullText=true')
  }

  // method to get all countries with common currency
  public getAllCountriesByCurrency(currencyCode): any{
    return this._http.get<Country[]>(this.baseUrl + '/currency' +'/' + currencyCode)
  }

  // method to get all countries with common language
  public getAllCountriesByLanguage(languageCode): any{
    return this._http.get<Country[]>(this.baseUrl + '/lang' +'/' + languageCode)
  }

  public getAllCurrencies(): Observable<any>{
    //https://restcountries.eu/rest/v2/all?fields=currencies
    let params = new HttpParams().set('fields', 'currencies');
    return this._http.get(this.baseUrl + '/all', {params:params});
  }
}
