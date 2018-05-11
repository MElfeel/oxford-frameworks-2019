import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    path = "assets/fruit.json";

    constructor( private http: HttpClient ) {}

    getFruit() : any {
         return this.http.get( this.path );
    }
}
