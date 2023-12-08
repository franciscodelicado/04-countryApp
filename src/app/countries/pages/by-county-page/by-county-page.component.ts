import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-county-page',
  templateUrl: './by-county-page.component.html',
  styles: ``
})
export class ByCountyPageComponent {
  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) { }

  public searchByCountry(term:string):void {
    this._countriesService.searchCountry(term).subscribe(
      countries => this.countries = countries,
    );
    console.log({countries: this.countries});
  }
}
