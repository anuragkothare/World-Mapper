import { Component, OnInit } from '@angular/core';
import { CountryService } from './../services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-region',
  templateUrl: './all-region.component.html',
  styleUrls: ['./all-region.component.css']
})
export class AllRegionComponent implements OnInit {

  public regions: any = [
    {
      regionName: 'Asia',
      image: '../../assets/asia1.jpg',
      description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres."
    },
    {
      regionName: 'Europe',
      image:  '../../assets/euro.jpg',
      description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere."
    },
    {
    regionName: 'Africa',
    image: '../../assets/africa.jpg',
    description: 'Africa is the world\'s second largest and second most-populous continent (behind Asia in both categories).'
    },
    {
      regionName: 'Oceania',
      image: '../../assets/oceanic.jpg',
      description: "Oceania is a geographic region comprising Australasia, Melanesia, Micronesia and Polynesia."
    },
    {
    regionName: 'Americas',
    image: '../../assets/americas.jpg',
    description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America."
    }
    ];

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit() {
  }



}
