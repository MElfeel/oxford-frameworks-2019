import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private channel = new Subject<string>();

  constructor() {}

  // base.component.ts sends messages to this service containing { name:"adenine", code:"a" }

  sendMessage(s: any) {
    this.channel.next(s);
  }

  // draw.component.ts subscribes to this Observable stream of messages.

  getChannel() {
    return this.channel.asObservable()
  }
}
