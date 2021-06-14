import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review } from '../model/Review';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'RX0513CCJP',
  '8c63b17a39153fb510c47a45140c5b12'
);

@Component({
  selector: 'app-review',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewComponent implements OnInit {
  Reviews: Review[];
  sub: any;

  config = {
    indexName: 'review_search',
    searchClient 
  };

  constructor( 
    private db: AngularFirestore, 
    private route : ActivatedRoute) {}

  globalCurrentDoctorID = '';
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.globalCurrentDoctorID = params['id'];
    });
    console.log('Review' + this.globalCurrentDoctorID);
    //this.getData();
  }

  getData() {
    console.log('Id= ' + this.globalCurrentDoctorID)
    this.db
      .collection("reviews", ref => ref.where("doctorID", "==", this.globalCurrentDoctorID))
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
}
