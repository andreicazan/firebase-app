import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  formData: FormGroup;
  globalDocumentID : any;

  constructor(
    
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    ) {

      this.formData = this.formBuilder.group({
     
        
        reviewID: [''],
        doctorID: [''],
        doctorName: [''],
        userID: [''],
        userName: [''],
        message: [''],
        rating: ['']
        
      })
          
   }

  ngOnInit(): void {
    const reviewID = this.act.snapshot.paramMap.get('id');
    console.log(reviewID)
    this.db
    .collection("reviews")
    .snapshotChanges()
    .subscribe(res => {
      res.map(e => {
        let data = e.payload.doc.data() as Review;
        this.globalDocumentID = e.payload.doc.id;
        console.log(data)
        if (data.reviewID == reviewID) {
          this.formData = this.formBuilder.group({
     
            reviewID : [data.reviewID],
            doctorID: [data.doctorID],
            userID: [data.userID],
            doctorName: [data.doctorName],
            userName: [data.userName],
            rating: [data.rating],
            message: [data.message]
            
          })
        }})
      })
}

onSubmit(){
  const formDoctorName = this.formData.get("doctorName").value;
  const formUserName = this.formData.get("userName").value;
  const formRating = this.formData.get("rating").value;
  const formMessage = this.formData.get("message").value;
  
  this.db
  .collection('reviews')
  .doc(this.globalDocumentID)    
  .update({
    doctorName : formDoctorName,
    userName : formUserName,
    rating : formRating,
    message : formMessage
  })
 
  this.router.navigate(['list-review'])
}

}