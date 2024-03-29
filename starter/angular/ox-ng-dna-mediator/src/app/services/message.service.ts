import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private channel = new Subject<string>();

  constructor() {}

  sendMessage(s: any) {
    this.channel.next(s);
  }

  getChannel() {
    return this.channel.asObservable()
  }
}
