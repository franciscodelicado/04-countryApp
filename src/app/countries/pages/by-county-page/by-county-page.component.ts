import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-county-page',
  templateUrl: './by-county-page.component.html',
  styles: ``
})
export class ByCountyPageComponent implements OnInit{
  public countries: Country[] = [];
  public initialValue: string = '';

  public isLoading: boolean = false;

  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byCountries.countries;
    this.initialValue = this._countriesService.cacheStore.byCountries.term;
  }

  public searchByCountry(term:string):void {
    this.isLoading = true;
    this._countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      });
    console.log({countries: this.countries});
  }
}
