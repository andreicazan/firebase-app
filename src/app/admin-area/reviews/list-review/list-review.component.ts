import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {
  Reviews: Review[];
  reviewID: any;
  constructor(private db: AngularFirestore) { }


  ngOnInit(): void {
    this.db
      .collection("reviews")
      .snapshotChanges()
      .subscribe(res => {
        this.Reviews = res.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Review
          }
        })
      });
  }

  removeReview = review => this.db.collection("reviews").doc(review.id).delete()
}


