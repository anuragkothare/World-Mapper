import { Country } from './../Model/Country';
import { CountryService } from './../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { AllRegionComponent } from './../all-region/all-region.component';
import { ValueTransformer } from '@angular/compiler/src/util';



@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  filterTypeList = [];
  filterTypeSelectedItems = [];
  filterTypeDropdownSettings = {};

  filterValueList = [];
  filterValueSelectedItems = [];
  filterValueDropdownSettings = {};

  public allCountries$ : Observable<Country[]>;
  public currencyMap: Map<String,any> = new Map();

  constructor(private _route: ActivatedRoute, private router: Router, public _http: CountryService) { }

  ngOnInit() {

      this.getAllCurrencies()
      // Dropdown Menu
      this.filterTypeList = [
        { item_id: 1, item_text: 'Language' },
        { item_id: 2, item_text: 'Region' },
        { item_id: 3, item_text: 'Currency' }
      ];
      this.filterTypeSelectedItems = [
        // { item_id: 2, item_text: 'Region' },

      ];

      this.filterValueList = [
        { item_id: 4, item_text: '' },
        { item_id: 5, item_text: '' },
        { item_id: 5, item_text: '' }
      ];
      this.filterValueSelectedItems = [
        // { item_id: 3, item_text: '' },
        // { item_id: 4, item_text: '' }
      ];

      this.filterTypeDropdownSettings = {
        singleSelection: true,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        allowSearchFilter: true
      };

      this.filterValueDropdownSettings = {
        singleSelection: true,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };

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

  onFilterTypeItemSelect (item:any) {
    //console.log(item);
    if(item.item_text === "Region"){
      this.filterValueList=[]
      AllRegionComponent.regions.forEach((value, i) => {
        //console.log('%d: %s', i, value.regionName);
        this.filterValueList.push({ item_id: i+1, item_text: value.regionName})
      });
    }
    else if(item.item_text === "Currency"){
      console.log("I m here " + this.currencyMap.size)
      this.filterValueList=[]
      Array.from(this.currencyMap.keys()).forEach((currency,i)=>{
        this.filterValueList.push({ item_id: i+1, item_text: currency})
      })
    }
  }

  onFilterValueItemSelect(item:any) {
    // console.log(item)
    // console.log(this.filterTypeSelectedItems)
    if(this.filterTypeSelectedItems && Array.isArray(this.filterTypeSelectedItems) && this.filterTypeSelectedItems.length>0){
      if(this.filterTypeSelectedItems[0].item_text === "Region"){
        let region = item.item_text;
        this.allCountries$ = this._http.getAllCountriesByRegion(region)
      }
      else if(this.filterTypeSelectedItems[0].item_text === "Currency"){
        let currencyName = item.item_text;
        let currencyCode = this.currencyMap.get(currencyName).code;
        this.allCountries$ = this._http.getAllCountriesByCurrency(currencyCode)
      }
    }

  }
  getAllCurrencies(){
    this._http.getAllCurrencies().subscribe((data: Array<any>)=>{
      for(var obj of data){
        for(var currency of obj.currencies){
          if(!this.currencyMap.has(currency.name)){
            this.currencyMap.set(currency.name, currency);
          }
        }
      }
    });
  }
}
