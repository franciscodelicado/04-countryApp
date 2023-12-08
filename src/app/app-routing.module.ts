import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  // {
  //   path: 'home', component: HomePageComponent
  // },
  // {
  //   path: 'about', component: AboutPageComponent
  // },
  // {
  //   path: 'contact', component: ContactPageComponent
  // },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '**', redirectTo: 'countries/by-capital'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
