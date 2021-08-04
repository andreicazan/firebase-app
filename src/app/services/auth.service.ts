import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

interface SuccessResponse {
  token: string;
  user: any; // should change any to your user type
}

interface FailureResponse {
  success: false;
  msg: string;
}

type AuthResponse = SuccessResponse | FailureResponse;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  static Token: string;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient) { }

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/search');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess', value);
        this.router.navigateByUrl('/email-login');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  googleLogin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        console.log('Sucess', value),
          this.router.navigateByUrl('/search');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider) {
    return this.auth.signInWithPopup(provider);
  }


  authenticateUser(user): Observable<AuthResponse> {
    // header for content-type is not needed
    return this.http.post<AuthResponse>('http://localhost:3000/users/authenticate', user);
}

}
