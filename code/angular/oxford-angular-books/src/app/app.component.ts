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

    constructor( private ds:DataService ) {}

    ngOnInit() {
      this.ds.getData( this.path ).subscribe( data => this.books = data )
    }

    select(b) {
      // Remove book
      // this.books = this.books.filter( book => book.id !== b.id );

      // Toggle boolean property used by ngClass to style book.
      b.selected = !b.selected;
    }
}
