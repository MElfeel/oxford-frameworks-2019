import { Component } from '@angular/core';
import { DataService } from "./services/books.service";
import { Book } from './types/book.type';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

    path = "https://my-json-server.typicode.com/johncoumbe/oxfordjson/books";

    books : Book[] = [];
    basket : Book[] = [];

    constructor( private ds:DataService ) {}

    ngOnInit() {
      this.ds.getData( this.path ).subscribe( data => this.books = data )
    }

    select(b) {
      // Remove book
      // this.books = this.books.filter( book => book.id !== b.id );

      b.selected = true;

      // Push a copy of book into basket.
      this.basket.push( {...b});
      
    }

    removeFromBasket( b ) {

      // Remove book from basket.
      this.basket = this.basket.filter( book => book.id !== b.id );

      // Add the book back onto the shelf
      this.books = this.books.map( book => (book.id === b.id) ? {...b, selected:false } : book );
    }
}
