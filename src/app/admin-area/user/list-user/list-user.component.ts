import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/model/User';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  Users: User[];
  userID: any;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db
      .collection("users")
      .snapshotChanges()
      .subscribe(res => {
        this.Users = res.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as User
          }
        })
      });
  }

  removeUser = user => this.db.collection("users").doc(user.id).delete()
}



