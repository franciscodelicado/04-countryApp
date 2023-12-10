import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';

const URL_BASE= 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public countries: Country[] = [];

  public cacheStore: CacheStore = {
    byCapital:    {term: '', countries: []},
    byCountries:  {term: '', countries: []},
    byRegions:    {region: '', countries: []},
  }

  constructor(private httpClient: HttpClient ) {
    this._loadFromLocalStorage();
  }

  private _save2LocalStorage( ): void{
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
  private _loadFromLocalStorage (): void{
    if (localStorage.getItem('cacheStore')){
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }


  private _getURL ( url: string ): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( err => of([]))
      );
  }

  public searchCapital( term: string ): Observable<Country[]>{
    const url: string = `${URL_BASE}/capital/${term}`;
    return this._getURL(url)
      .pipe(
        tap ( countries => this.cacheStore.byCapital = {term, countries} ),
        tap( () => this._save2LocalStorage() )
      );
  }
  public searchCountry( term: string ): Observable<Country[]>{
    const url: string = `${URL_BASE}/name/${term}`;
    return this._getURL(url)
      .pipe(
        tap ( countries => this.cacheStore.byCountries = {term, countries} ),
        tap( () => this._save2LocalStorage() )
      );
    ;
  }

  public searchRegion( region: Region ): Observable<Country[]>{
    const url: string = `${URL_BASE}/region/${region}`;
    return this._getURL(url)
      .pipe(
        tap ( countries => this.cacheStore.byRegions = {region, countries} ),
        tap( () => this._save2LocalStorage() )
      );
    ;
  }

  public searchCountryByAlpha( id: string ): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${URL_BASE}/alpha/${id}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null ),
        catchError( err => of(null))
      )
  }


}
