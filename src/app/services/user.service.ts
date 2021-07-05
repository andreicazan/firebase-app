import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFirestore) {}

  getUserDoc(id) {
    return this.db
    .collection('reviewers')
    .doc(id)
    .valueChanges()
  }

  getUserList() { 
    return this.db
    .collection("reviewers")
    .snapshotChanges();
  }

  getUserListFilter(name){
    return this.db
    .collection("reviewers", filter => filter.where('name', '==', name));
    
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) =>{
      this.db
        .collection("reviewers")
        .add(user)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteUser(user) {
    return this.db
      .collection("reviewers")
      .doc(user.id)
      .delete();
  }
  
  updateUser(user: User, id) {
    return this.db
      .collection("reviewers")
      .doc(id)
      .update({
        name: user.name,
        password: user.password
      });
  }
}