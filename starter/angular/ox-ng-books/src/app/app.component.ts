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


}
