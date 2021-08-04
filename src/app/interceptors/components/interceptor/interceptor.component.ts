import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit, HttpInterceptor {

  data: {};
  constructor(private httpClient: HttpClient) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);

  //headers object is immutable si trebuie req.clone
  //la append il adauga chiar daca deja exista
  
  req = req.clone({ headers: req.headers.append('SomeKey', 'SomeValue')});
  if(req.headers.has('SomeKey') == true){
    req = req.clone( { headers: req.headers.set('SomeKey', 'AnotherValue')});
  }
  
  // delete key header
  // req = req.clone({ headers: req.headers.delete('SomeKey','AnotherValue')});
  
  console.log(req.headers.get('SomeKey'));

  const token: string = AuthService.Token;
  req = req.clone({ headers: req.headers.append('Authorization', 'Bearer' + token)});
 
  // logging/timeing the complete http request-response
  
  // modify the response


  return next.handle(req)
  .map(resp => {
    const myBody = [{
      'id': '597f-4b96',
      'name': 'Peter Pan',
      'description': 'Animated Story',
     
    }];

    //on Response
    if(resp instanceof HttpResponse){
      console.log(resp);
      console.log(resp.body);
      resp = resp.clone<any>({ body: myBody});
      console.log(resp.body);
      return resp;
    }
  });
}
 

  ngOnInit(): void {

    this.httpClient.get('https://random-data-api.com/api/beer/random_beer').subscribe(data => this.data = data);
  }



}
