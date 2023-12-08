import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { ByCountyPageComponent } from "./pages/by-county-page/by-county-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";



const routes: Routes =[
  { path: 'by-region', component: ByRegionPageComponent }, // /countries/by-region
  { path: 'by-capital', component: ByCapitalPageComponent }, // /countries/by-capital
  { path: 'by-country', component: ByCountyPageComponent }, // /countries/by-country
  { path: 'by/:id', component: CountryPageComponent}, // /countries/by/colombia
  { path: '**', redirectTo: 'by-capital'} // /countries/** => /countries/by-capital
]

@NgModule({

  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule {}
