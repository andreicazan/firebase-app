import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  formData : FormGroup;

  constructor(
    private db: AngularFirestore, 
    public formBuilder: FormBuilder,
    public router: Router) { 
      this.formData = this.formBuilder.group({
        doctorName : [''],
        category : ['']
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    const doctorName = this.formData.get('doctorName').value;
    const category = this.formData.get('category').value;
    const doctorID = Math.random().toString(36).substr(2, 5);
    console.log(doctorName);
    console.log(doctorID);
    console.log(category);

    this.db.collection("doctors")
    .add({
      doctorID,
      doctorName,
      category});
      
    this.router.navigate(['list-doctor'])
  }

}
