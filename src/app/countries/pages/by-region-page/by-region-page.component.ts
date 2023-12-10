import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegions.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegions.region;
  }

  public searchByRegion(region: Region):void {
    this.selectedRegion = region;
    this.isLoading = true;
    this._countriesService.searchRegion(region).subscribe(
      countries =>{
        this.countries = countries;
        this.isLoading = false;
      });
    console.log({countries: this.countries});
  }
}

