import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css']
})
export class EmailLoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) { 
      if(formData.value.email='admin' && (formData.value.password='admin')) {
        this.router.navigateByUrl('/admin');
      }else{

      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
      }
    }
  }
}