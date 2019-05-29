import { of, Subject } from 'rxjs';
import { map,filter,debounceTime } from 'rxjs/operators';

import { fruit } from "./data.js";

of(...fruit)

  .pipe(
    debounceTime(500),
    filter( f => f.price > 70 ),
    map(f => f.name.toUpperCase()))

  .subscribe(
    f => console.log(f),
    e => console.error(e),
    () => console.log("••••••••••••"))

// ==========================================

const channel = new Subject();

const subA = channel.subscribe( d => console.log(`${d.name.toLowerCase()}`));

const subB = channel.subscribe( d => console.log(`${d.name.toUpperCase()}`));

fruit.forEach( f => channel.next( f ))
