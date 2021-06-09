import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/Rx';
import { Review } from '../model/Review';
import { Doctor } from '../model/Doctor';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'RX0513CCJP',
  '8c63b17a39153fb510c47a45140c5b12'
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Doctors: Doctor[];
  Reviews: Review[];

  objectDoctor: AngularFirestoreDocument<Doctor>;
  doctorCollection: AngularFirestoreCollection<Doctor>;

  config = {
    indexName: 'doctor_search',
    searchClient
  };

  constructor(
    private db: AngularFirestore,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {

    this.db
      .collection("doctors")
      .snapshotChanges()
      .subscribe(res => {
        this.Doctors = res.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Doctor
          }
        })
      });

  }

  showDivCondition : boolean = false;

  getDoctorReviews(doctorId: string) {

    this.showDivCondition = true;

    console.log('Id= ' + doctorId)
    this.db
      .collection("reviews", ref => ref.where("doctorID", "==", doctorId))
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

  insertReview(docotrId : string){

  }

  

  

  
  
}