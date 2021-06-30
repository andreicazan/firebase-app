import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  formData: FormGroup;
  id: any;
  idRef : any;

  sub: any;
  

  constructor(public formBuilder: FormBuilder,
    private db: AngularFirestore,
    private route: ActivatedRoute) {
          
   }
   globalCurrentID = '';

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.globalCurrentID = params['id'];

      this.db.collection("doctors").doc(this.globalCurrentID).valueChanges().subscribe(res =>{
        this.idRef = res;
        console.log(res);
        this.formData = new FormGroup({
          'doctorName' : this.idRef.doctorName,
          'category' : this.idRef.category
  
        })
     })

    })

    
   
    

  }

  private initForm(){
    this.formData = new FormGroup({
      'doctorName' : new FormControl()
    })
  }
  
  onSubmit(formData){
    this.db.collection("doctors")
    .doc(this.id)
    .update(
      formData.value
    )
    
  }

}
