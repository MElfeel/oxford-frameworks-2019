import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // A. Listen for events from base.component.ts
  // Create an sequence array and pass it into draw.component.ts as an INPUT

  // sequence = [];

  // addToSequence(base) {
  //   let copy = {...base , code : base.code.toUpperCase() }
  //   this.sequence.push( copy );
  // }

  // B. If draw.component.ts and base.component.ts use a message service,
  // this main component does not need to do anything.
}
