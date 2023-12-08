import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public object: any = Object;

  constructor(
          private _activateRoute: ActivatedRoute,
          private _countryService: CountriesService,
          private _router: Router
  ) { }

  ngOnInit(): void {
    this._activateRoute.params
      .pipe(
        switchMap( ({id}) => this._countryService.searchCountryByAlpha(id) )
       )
      .subscribe( country => {
          if(!country){
            this._router.navigateByUrl('/countries');
            return;
          }
          this.country = country;
          return;
        }
      );
  }

}
