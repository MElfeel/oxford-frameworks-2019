
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './app.city.html',
  styleUrls: ['../app.component.css']
})

export class CityComponent implements OnInit {

    @Input() data;
    @Output() select = new EventEmitter();

    constructor() {}
    ngOnInit() {}
}
