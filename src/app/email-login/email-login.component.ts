import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(
    private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) { 
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}