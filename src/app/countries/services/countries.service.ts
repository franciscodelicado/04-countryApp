import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

const URL_BASE= 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countries: Country[] = [];

  constructor(private httpClient: HttpClient ) { }

  private _getURL ( url: string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( err => of([]))
      );
  }

  public searchCapital( term: string ): Observable<Country[]>{
    const url: string = `${URL_BASE}/capital/${term}`;
    return this._getURL(url);
  }
  public searchCountry( term: string ): Observable<Country[]>{
    const url: string = `${URL_BASE}/name/${term}`;
    return this._getURL(url);
  }

  public searchRegion( region: string ): Observable<Country[]>{
    const url: string = `${URL_BASE}/region/${region}`;
    return this._getURL(url);
  }

  public searchCountryByAlpha( id: string ): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${URL_BASE}/alpha/${id}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null ),
        catchError( err => of(null))
      )
  }


}
