import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HolidayComponent } from './app.component';

import { CityComponent } from './city/app.city';

import { TourService } from './services/service.tour';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ HolidayComponent,CityComponent ],
  bootstrap:    [ HolidayComponent ],
  providers:    [ TourService ]
})

export class AppModule { }
