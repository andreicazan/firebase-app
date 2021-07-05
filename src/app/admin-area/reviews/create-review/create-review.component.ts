import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  formData: FormGroup;

  constructor(
    private db: AngularFirestore,
    public formBuilder: FormBuilder,
    public router: Router) {
    this.formData = this.formBuilder.group({
      doctorName: [''],
      rating: [''],
      patientName: [''],
      message: ['']
    })
  }

  ngOnInit(): void { }
  onSubmit() {
    const doctorID = Math.random().toString(36).substr(2, 5);
    const userID = Math.random().toString(36).substr(2, 5);
    const reviewID = Math.random().toString(36).substr(2, 5);
    const doctorName = this.formData.get('doctorName').value;
    const rating = this.formData.get('rating').value;
    const userName = this.formData.get('patientName').value;
    const message = this.formData.get('message').value;
    const date = new Date();

        this.db.collection("reviews")
      .add({
        reviewID,
        doctorID,
        userID,
        doctorName,
        rating,
        userName,
        message,
        date
      });

    this.router.navigate(['list-review'])
  }

}


