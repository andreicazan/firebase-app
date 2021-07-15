import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/Rx';
import { Review } from '../model/Review';
import { Doctor } from '../model/Doctor';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Doctors: Doctor[];
  Reviews: Review[];

  closeResult='';
  globalCurrentDoctorID = '';
  globalCurrentDoctorName = '';

  searchField : string;
  globalDocumentID : any;



  list =  Array<String>();


  open(content, doctorId: string, doctorName: string) {
    this.globalCurrentDoctorID = doctorId;
    this.globalCurrentDoctorName = doctorName;
    
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

  
  

  constructor(
    private db: AngularFirestore,
    private modalService: NgbModal,
    public router: Router,
    public datepipe: DatePipe) {

      
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
    return doctorId;
  }

onSubmit() {
  const reviewID = Math.random().toString(36).substr(2, 5);
  const userID = Math.random().toString(36).substr(2, 5);
  const doctorID = this.globalCurrentDoctorID;
  const doctorName = this.writeReviewForm.get('doctorName').value;
  const newRating = this.writeReviewForm.get('rating').value;
  const userName = this.writeReviewForm.get('patientName').value;
  const message = this.writeReviewForm.get('message').value;
  const date = new Date();

 this.db.collection("reviews")
  .add({
    reviewID,
    doctorID,
    userID,
    doctorName,
    rating: newRating, 
    userName,
    message,
    date });   


  }
  
onSearch(){
  console.log(this.searchField);
  this.db
  .collection("doctors", ref => ref.where("doctorName", "==", this.searchField)) 
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

    clear(){
    this.searchField = '';
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


  
}