import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

interface Animal {
  name: string;
  age: number;
  sex: string;
  breed: string;
  colour: string;
  }

  interface animID extends Animal {
    id: string;
  }

@Component({
  selector: 'app-detail-animal',
  templateUrl: './detail-animal.component.html',
  styleUrls: ['./detail-animal.component.css']
})
export class DetailAnimalComponent implements OnInit {
 
 curUser: any; // This used to maintain the logged in user. 

 animalDoc: AngularFirestoreDocument<Animal>;
 animalCol: AngularFirestoreCollection<Animal>;

 animalInfo: any;

 petID: Observable<Animal>;


  constructor(public auth: AuthService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    public route: ActivatedRoute) {

    const petID: string = route.snapshot.paramMap.get('id');
    const user: any = this.afAuth.authState

  }

  private curPetID: string = this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {

    this.afAuth.onAuthStateChanged((user) => {

      if (user) {
        // get the current user    
        this.curUser = user.uid;
        console.log('Animal ID:', this.curPetID )
        console.log('Current User: ', this.curUser);
        // Specify the Collection
        
        const docRef = this.afs.doc(`users/${this.curUser}/animals/${this.curPetID}`)
        this.animalInfo = docRef.valueChanges()
        }
        });
      }
    }
