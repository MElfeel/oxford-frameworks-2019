
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TourService } from './services/service.tour';

import { City } from './type.city';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class HolidayComponent implements OnInit {

  tour = [];
  cities : City[] ;

  constructor(private http: HttpClient, private ts:TourService ) {}

  ngOnInit() {}

  loadHoliday() {
    // Use an Observable to read JSON
    this.http
      .get<City>("assets/holiday.json")
      .subscribe(data => this.cities = data)

  }

  selectCity( city ) {
    
    if( !city.selected ) {
 
      this.ts.addCityToTour( city );
 
      city.selected = true;
    }
  }

  remove( name ) {
    
    this.ts.removeCityFromTour( name )

    let city = this.cities.find( city => city.name === name );
    city.selected = false;
  }
}
