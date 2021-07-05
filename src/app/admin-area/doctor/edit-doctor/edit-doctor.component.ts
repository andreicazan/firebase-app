import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Doctor } from 'src/app/model/Doctor';
import { DoctorInfoService } from 'src/app/services/doctor-info.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  public formData: FormGroup;
  globalDocumentID : any;

  constructor(
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    ) {

      this.formData = this.formBuilder.group({
     
        doctorName: [''],
        category: ['']
        
      })
          
   }
   

  ngOnInit(): void {
    const doctorID = this.act.snapshot.paramMap.get('id');

    this.db
      .collection("doctors")
      .snapshotChanges()
      .subscribe(res => {
        res.map(e => {
          let data = e.payload.doc.data() as Doctor;
          this.globalDocumentID = e.payload.doc.id;
          console.log(data)
          if (data.doctorID == doctorID) {
            this.formData = this.formBuilder.group({

              doctorName: [data.doctorName],
              category: [data.category]

            })
          }})
        })
}


  
  onSubmit(){
    const formDoctorName = this.formData.get("doctorName").value;
    const formCategory = this.formData.get("category").value;
    
    this.db
    .collection('doctors')
    .doc(this.globalDocumentID)    
    .update({
      doctorName : formDoctorName,
      category : formCategory
    })
   
    this.router.navigate(['list-doctor'])
  }

}
