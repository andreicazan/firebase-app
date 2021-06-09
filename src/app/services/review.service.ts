import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private db: AngularFirestore) { }

  getDoctorID(){
    this.db
    .collection('doctors')
    
  }

  getReviewInfo(id) {
    return this.db
      .collection('doctors/'+id+'reviews')
      .snapshotChanges();
  }

}

