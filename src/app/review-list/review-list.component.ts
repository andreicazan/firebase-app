import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Review } from '../model/Review';




@Component({
  selector: 'app-review',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewComponent implements OnInit {
  Reviews: Review[];
  sub: any;

  
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute) {   
    }

  globalCurrentDoctorID = '';

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.globalCurrentDoctorID = params['id'];
    });
    this.getData();


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

  getDataByRating(ratingValue: String) {
    console.log('Id= ' + this.globalCurrentDoctorID)
    console.log(ratingValue)
    this.db
      .collection("reviews", ref => ref.where("doctorID", "==", this.globalCurrentDoctorID).where("rating", '==', Number(ratingValue)))
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

  getDataByDate(dateValue: any) {
    console.log('Date =|' + dateValue + '|');
    console.log('Ceva');
    console.log('Id= ' + this.globalCurrentDoctorID);
    

      this.db
        .collection("reviews", ref => ref.where("doctorID", "==", this.globalCurrentDoctorID).orderBy('date', dateValue))
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






