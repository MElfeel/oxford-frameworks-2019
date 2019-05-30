import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})
export class DrawComponent implements OnInit {

  // A. Pass dnaSequence array in as an INPUT from app.component.ts
  // @Input() dnaSequence;

  // B. Subscribe to an Observable stream of messages from the service.
  dnaSequence = [] ;

  constructor( private ms:MessageService ) {}

  ngOnInit() {
    this.ms.getChannel().subscribe( s => this.dnaSequence.push(s))
  }
}
