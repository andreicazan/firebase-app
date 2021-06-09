import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFirestore) {}

  getUserDoc(id) {
    return this.db
    .collection('user-collection')
    .doc(id)
    .valueChanges()
  }

  getUserList() { 
    return this.db
    .collection("user-collection")
    .snapshotChanges();
  }

  getUserListFilter(name){
    return this.db
    .collection("user-collection", filter => filter.where('name', '==', name));
    
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) =>{
      this.db
        .collection("user-collection")
        .add(user)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteUser(user) {
    return this.db
      .collection("user-collection")
      .doc(user.id)
      .delete();
  }
  
  updateUser(user: User, id) {
    return this.db
      .collection("user-collection")
      .doc(id)
      .update({
        name: user.name,
        password: user.password
      });
  }
}