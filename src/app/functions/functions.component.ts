import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    function AsyncStream(observer) {
      var time1 = setInterval(() => {
        observer.next(Math.random()*10);
       }, 1000);
    }

    var myObserv = Observable.create(AsyncStream);
    
    var stepOneStream = myObserv.pipe(map( a => Math.round(Number(a))));
    var stepTwoStream = stepOneStream.pipe(filter(x => x>4));

    var subscription = stepTwoStream.subscribe(res => Listener(res));

    function Listener(res) {
      console.log(res);
      subscription.unsubscribe();
      
    }

  

  }

}