import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/Rx';
import { Review } from '../model/Review';
import { Doctor } from '../model/Doctor';
import algoliasearch from 'algoliasearch/lite';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  closeResult='';
  globalCurrentDoctorID = '';

  open(content, doctorId: string) {
    this.globalCurrentDoctorID = doctorId;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public reviewForm: FormGroup;

  constructor(
    private db: AngularFirestore,
    private modalService: NgbModal,
    public router: Router) {

      
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

  public getDoctorReviews(doctorId: string) {

    this.showDivCondition = (this.showDivCondition == false) ? true : false;

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


  writeReviewForm = new FormGroup({
    doctorName: new FormControl(),
    rating: new FormControl(),
    patientName: new FormControl(),
    message: new FormControl(),
  }); 

  getDoctorID(doctorId : String){
    console.log('insertReview_doctorID= ' + doctorId);
    return doctorId;
  }

  onSubmit() {
       
    const doctorID = this.globalCurrentDoctorID;
    const doctorName = this.writeReviewForm.get('doctorName').value;
    const rating = this.writeReviewForm.get('rating').value;
    const userName = this.writeReviewForm.get('patientName').value;
    const message = this.writeReviewForm.get('message').value;

   this.db.collection("reviews")
    .add({
      doctorID,
      doctorName,
      message,
      rating, 
      userName, });
   
}
  
}