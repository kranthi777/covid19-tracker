import { CountriesListComponent } from './countries-list.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface CountriesListResponse {
  updated: string,
  country: string,
  countryInfo: Object,
  cases: number,
  todayCases: number,
  deaths: number,
  todayDeaths: number,
  recovered: number,
  active: number,
  critical: number,
  casesPerOneMillion: number,
  deathsPerOneMillion: number,
  tests: number,
  testsPerOneMillion: number,
  continent: string
}
@Injectable()
export class CountriesListService {

  constructor(private http: HttpClient) {
  }

  getCountriesData() {
    return this.http
      .get<CountriesListResponse[]>(
        'https://corona.lmao.ninja/v2/countries?sort=country'
      )  
  }
}
