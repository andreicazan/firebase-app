import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoctorInfoService {

  constructor(private db: AngularFirestore) {}

  getDoctorList() { 
    return this.db
    .collection("doctors")
    .snapshotChanges();
  }
  
}
