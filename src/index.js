
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const source = fromEvent(document, 'click')
    .pipe(map(event => `Event time: ${event.timeStamp}`));
const subscribe = source.subscribe(val => console.log(val));

const button = fromEvent(document.getElementById('button'), 'click')
button.subscribe(click => subscribe.unsubscribe())