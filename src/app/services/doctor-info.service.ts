import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Doctor } from '../model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  constructor(private db: AngularFirestore) {}

  getDoctorDoc(id) { 
    return this.db
    .collection("doctors")
    .doc(id)
    .valueChanges()
  }

  updateDoctor(doctor: Doctor, id) {
    console.log("DOCTOR = " + doctor.doctorName)
    this.db
      .collection("doctors")
      .doc(id)
      .update({
        doctorName: doctor.doctorName,
        category: doctor.category
        
      });
  }
  
}
