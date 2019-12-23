import { interval, of, queueScheduler, defer, timer, SchedulerLike } from 'rxjs';
import { delay, switchMap, tap, flatMap, map, repeat, delayWhen, concatMap, take } from 'rxjs/operators';
import '@google/model-viewer';

// delay
export const createSpecialInterval = (number: number, scheduler ?: SchedulerLike ) => {
  return interval(0, scheduler).pipe(concatMap(v => of(v).pipe(delay(v * 1000, scheduler))), take(number));
}

// createSpecialInterval(100).subscribe(v => { 
//   console.log(v); 
//   console.timeEnd('interval'); 
//   console.time('interval');
// });

// const model = document.createElement('model-viewer');
// model.src = 'http://localhost:3001/mo.glb?accessToken=hero';

// document.body.appendChild(model);