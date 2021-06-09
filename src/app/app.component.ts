import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-app';

  userDoc: AngularFirestoreDocument<any>;
  movieDoc: AngularFirestoreDocument<any>;

  user: Observable<any>;
  movie: Observable<any>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.userDoc = this.afs.doc('users/test-user-2')
    this.movieDoc = this.afs.doc('movies/battlefield-earth')

    this.movie = this.movieDoc.valueChanges()
    this.user = this.userDoc.valueChanges()
  }

  get movieId() {
    return this.movieDoc.ref.id
  }

  get userId() {
    return this.userDoc.ref.id
  }


}