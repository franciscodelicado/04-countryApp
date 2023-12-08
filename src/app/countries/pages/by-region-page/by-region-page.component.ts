import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) { }

  public searchByRegion(term:string):void {
    this._countriesService.searchRegion(term).subscribe(
      countries => this.countries = countries,
    );
    console.log({countries: this.countries});
  }
}

