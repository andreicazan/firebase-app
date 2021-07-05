import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Doctor } from 'src/app/model/Doctor';


@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  Doctors : Doctor[];
  doctorID: any;
  constructor(private db: AngularFirestore) { }

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

  removeDoctor = doctor => this.db.collection("doctors").doc(doctor.id).delete()


   

  

}
