
import { Injectable } from '@angular/core';

@Injectable()
export class TourService {

    tour = [];

    addCityToTour( city ) {
      this.tour.push( { ...city });
    }

    getTour() { 
      return this.tour
    }

    removeCityFromTour( name ) {
      this.tour = this.tour.filter( city => city.name !== name );
    }
}

