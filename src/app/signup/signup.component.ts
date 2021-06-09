import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
  password: any;
  email: any;

  userEmails = new FormGroup({
	registerEmail: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  get regEmail(){
    return this.userEmails.get('registerEmail')
    }

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
    }
  }

  loginGoogle() {
    this.authService.googleLogin();
  }
}