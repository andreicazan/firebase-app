import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  formData : FormGroup;

  constructor(
    private db: AngularFirestore, 
    public formBuilder: FormBuilder,
    public router: Router) { 
      this.formData = this.formBuilder.group({
        name : [''],
        email : [''],
        password : ['']
      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    const name = this.formData.get('name').value;
    const email = this.formData.get('email').value;
    const password = this.formData.get('password').value;

    const userID = Math.random().toString(36).substr(2, 5);
    
    this.db.collection("reviewers")
    .add({
      userID,
      name,
      email,
      password
    });
      
    this.router.navigate(['list-user'])
  }

}
