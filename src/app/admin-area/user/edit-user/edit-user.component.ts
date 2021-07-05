import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public editForm: FormGroup;
  globalDocumentID : any;

  constructor(
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
    const UserID = this.act.snapshot.paramMap.get('id');
    console.log(UserID)

    this.db
      .collection("reviewers")
      .snapshotChanges()
      .subscribe(res => {
        res.map(e => {
          let data = e.payload.doc.data() as User;
          this.globalDocumentID = e.payload.doc.id;
          console.log(data)
          if (data.userID == UserID) {
            this.editForm = this.formBuilder.group({

              name: [data.name],
              email: [data.email],
              password: [data.password] 

            })
          }})
        })
  }

  onSubmit() {
    
    
    const formUserName = this.editForm.get("name").value;
    const formUserEmail = this.editForm.get("email").value;
    const formUserPassword = this.editForm.get("password").value;

    console.log(this.globalDocumentID)
    
    this.db
    .collection('reviewers')
    .doc(this.globalDocumentID)    
    .update({
      name : formUserName,
      email : formUserEmail,
      password : formUserPassword
    })

    this.router.navigate(['list-user']);
  };

}
