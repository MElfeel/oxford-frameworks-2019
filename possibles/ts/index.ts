import './style.css';
import { draw } from './utils.ts';

// Basic types ====================
let year : number = 2016;
let smoker :boolean = false;
let city : string = "Seville";
draw( city + year );

// Custom types ====================
let confPass: [ string, number ];
confPass = [ "Fred Smith" , 1024 ];

// Arrays ====================
let lottery: number[] = [ 45,12,87,4,5,77 ];
let lotto: Array<number> = [ 45,12,87,4,5,77 ];

var regions : string[] = [ "Galicia", "Aragon" ];
var regions : Array<string> = [ "Valencia", "Andalusia" ];


// Typescript function in ES5 ====================
let dble : Function = function( n:number ) :number {
	return n*2;
}

function makePerson( n:string, a:number ) : object {
    return { name:n,age:a };
}

let jane:object = makePerson( "Jane Jones",48 );

// Enumerated types ====================

enum Direction { Left, Right, Up, Down };
let turn:Direction = Direction.Left;

enum Size { ExtraSmall, Small, Medium, Large, ExtraLarge };
let xl: Size = Size.ExtraLarge;

draw( Size[0], typeof Size[0] );
draw( Size.ExtraSmall, typeof Size.ExtraSmall );

// Any ====================
let stuff:any = {};
stuff = -46;

// Optional parameters ====================

function message( s:string,d?:boolean ) {
	s = d ? "DEBUG: " + s : s;
	draw(s);
}

message("Hello",true);
message("Angular");

// =====================================================

class Dog{
    breed: string;
    gender:string;

    constructor( b:string,g:string ) {
        this.breed=b;
        this.gender=g;
    }
}

class Queue<T> {

  private q = [];

  constructor() {}
  push = (item: T) => this.q.push(item);
  pop = (): T => this.q.shift();
  debug = () => draw(JSON.stringify( this.q ));

}

let lotto = new Queue<number>();
lotto.push(0);
lotto.push(1);
lotto.debug();

let kennels = new Queue<Dog>();

let martha = new Dog( "Irish Terrier", "female" );
let fido = new Dog( "Labrador", "male" );

kennels.push( martha );
kennels.push( fido );

kennels.debug();
