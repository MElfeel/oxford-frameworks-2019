import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { interval,Subscription } from "rxjs";
import { take } from 'rxjs/operators';
import { fourBases } from '../data/data.js';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['../app.component.css']
})
export class BaseComponent implements OnInit {

	@Output() changeBase: EventEmitter<any> = new EventEmitter();

	private speed = 1000;
	private fourBases = fourBases;
	private base = null;
  private subs : Subscription;

  constructor( private ms:MessageService ) {}

  ngOnInit() {
    // Once a second create an Observable stream of numbers. Call setBase()
    this.subs = interval( this.speed ).subscribe(n => this.setBase());
  }

  ngOnDestroy() {
    // Ensure that the Observable is destroyed.
    this.subs.unsubscribe(); 
  }

  setBase() {
    // Choose a random base.
    let position = Math.floor( Math.random() * this.fourBases.length );
    this.base = this.fourBases[ position ];
    
    // A. Dispatch custom event CHANGEBASE: app.component.html listens for this event.
    // this.changeBase.emit( this.base );

    // B. Send a message to the service.
    this.ms.sendMessage( this.base )
  }
}