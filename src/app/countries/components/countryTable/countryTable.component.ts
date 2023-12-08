import { Component, Input } from "@angular/core";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'countries-table',
  templateUrl: `./countryTable.component.html` ,
  styles: [
    `
    table {
      width: 100%;
      border-collapse: collapse;
    }
    td, th {
      border: 1px solid #d3d3d3;
      padding: 5px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    img{
      width: 25px;
    }
    `
  ]

})
export class CountryTableComponent {

  @Input() countries: Country[] = [];
}

// Path: src/app/countries/components/countryTable/countryTable.component.html@
