import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router) { }

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
}
