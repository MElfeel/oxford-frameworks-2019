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

}