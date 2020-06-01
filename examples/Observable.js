// Pull vs Push

// Pull
// wartość natychmiast
function getValue(){
    return 1;
}
getValue();

var value = 1;
value

var object = {
    value: 1,
    value2: 2
}
object.value

var arr = [1,2,3]
arr


// Obiekt obserwowany
// Observable: represents the idea of an invokable collection of future values or events.

var arr = [1,2,3]
console.log(arr)
// 1 2 3

//Observable
//Przykład
// 1 - (przerwa 10 sekund) - 2 3


import { Observable } from "rxjs";

const foo = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2); 
    subscriber.next(3);
});
   
console.log('before');
// obserwator
foo.subscribe(x => {
    console.log(x);
});
console.log('after');


// Error

import { Observable } from "rxjs";

const foo = new Observable(subscriber => {
    subscriber.next(42);
    subscriber.error('Error!!!!')
  });
   

foo.subscribe(
    {
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
    }
);


// Complete

import { Observable } from "rxjs";

const foo = new Observable(subscriber => {
    subscriber.next(42);
    subscriber.complete();
  });
   

foo.subscribe(
    {
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
    }
);


// Operatory

import { of } from 'rxjs';
const source = of(1, 2, 3, 4, 5);
source.subscribe(val => console.log(val));



import { timer } from 'rxjs';
const source = timer(1000, 2000);
source.subscribe(val => console.log(val));




import { fromEvent } from 'rxjs';
const source = fromEvent(document, 'click');
source.subscribe(val => console.log(val));



// Pipe 

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const source = fromEvent(document, 'click')
    .pipe(map(event => `Event time: ${event.timeStamp}`));
source.subscribe(val => console.log(val));


// unsubscribe


import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const source = fromEvent(document, 'click')
    .pipe(map(event => `Event time: ${event.timeStamp}`));
const subscribe = source.subscribe(val => console.log(val));

const button = fromEvent(document.getElementById('button'), 'click')
button.subscribe(click => subscribe.unsubscribe())